/* eslint-disable no-unreachable */
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRecoilValue } from 'recoil';
import * as dayjs from 'dayjs';
import { Loader, Section } from '../../components';
import { BookingDetails } from '../BookingDetails';
import { PersonalInfoForm } from '../PersonalInfoForm';
import { getBooking, postBooking, getMailText } from '../../lib/graphcms';
import { bookingDetails, guests, hotelContacts, selectedRoom } from '../../store';
import { checkBooking, formatDate } from '../../utils';

import styles from './OrderSection.module.css';
import { handleContactMessage } from '../../lib/sendMail';
import { SendedBlock } from './SendedBlock';
import { checkAwailable } from '../../lib/frontdesk24';

import('dayjs/locale/ru');

const schema = yup
  .object({
    firstName: yup.string().required('Обязательное поле'),
    secondName: yup.string().required('Обязательное поле'),
    middleName: yup.string(),
    email: yup.string().email('Укажите корректный email').required('Укажите email'),
    phone: yup
      .string()
      .test(
        'len',
        'Номер должен состоять из 11 цифр',
        (val) => val && val.replace(/[^0-9]/g, '').length === 11
      )
      .required('Укажите номер телефона'),
    comment: yup.string(),
  })
  .required();

export function OrderSection() {
  const [formResult, setFormResult] = useState({});
  const [sended, setSended] = useState(false);
  const [sendingError, setSendingError] = useState(false);
  const [bookingError, setBookingError] = useState(false);
  const [mailLoading, setMailLoading] = useState(false);

  const booking = useRecoilValue(bookingDetails);
  const room = useRecoilValue(selectedRoom);
  const guestsData = useRecoilValue(guests);
  const contacts = useRecoilValue(hotelContacts);

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const dateFrom = dayjs(booking.fromDate).locale('ru').format('DD MMM YYYY');
  const dateTo = dayjs(booking.toDate).locale('ru').format('DD MMM YYYY');
  const count = dayjs(booking.toDate).diff(dayjs(booking.fromDate).format('YYYY-MM-DD'), 'days');

  const minBeds = guestsData.adults - room.bedsCount >= 0 ? guestsData.adults - room.bedsCount : 0;
  const pricePerNight = room.discountPrice || room.price;
  let totalPrice = (pricePerNight + minBeds * 800) * count;
  const oldPrice = room.discountPrice ? (room.price + minBeds * 800) * count : null;

  if (totalPrice < (room.discountPrice || room.price)) {
    totalPrice = room.discountPrice || room.price;
  }

  useEffect(() => {
    setBookingError(false);
  }, [booking.fromDate, booking.toDate]);

  const handleSend = async (data) => {
    try {
      setMailLoading(true);
      setSendingError(false);

      const mailText = await getMailText();

      const res = await checkAwailable(booking.fromDate, booking.toDate);

      if (res[room.roomTypeId].freeRooms <= 0) {
        setBookingError(true);
        setMailLoading(false);
        return;
      }

      const formData = {
        text: (mailText?.text || [])[0]?.html || '',
        room: room.title,
        fromDate: formatDate(booking.fromDate),
        toDate: formatDate(booking.toDate),
        nightsCount: count,
        custumerName: `${data.secondName || ''} ${data.firstName || ''} ${data.middleName || ''}`,
        email: data.email,
        phone: data.phone,
        hotelEmail: process.env.MAIL_USERNAME || 'bibliotel8@yandex.ru',
        hotelPhone: contacts.phone || '',
        hotelAddress: room.hotel?.address || '',
        adults: guestsData.adults,
        children: guestsData.childrens,
        guests: `Гости: ${guestsData.adults || 1}`,
        totalPrice,
        price: pricePerNight,
        comment: data.comment || '',
        roomId: room.roomTypeId,
      };

      const isEmailSend = await handleContactMessage(formData);

      if (!isEmailSend) {
        setSendingError(true);
        setMailLoading(false);
        return;
      }

      setFormResult(formData);
      setMailLoading(false);
      setSended(true);
    } catch (e) {
      console.log('Errror', e.message);
      setSendingError(true);
      setMailLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Section>
        <Typography variant="h2" fontSize={40} fontWeight={700} mb={5} className="title">
          {sended ? 'Бронь выполнена' : 'Бронирование номера'}
        </Typography>
        {sended ? (
          <SendedBlock {...{ formResult, dateFrom, dateTo, count }} />
        ) : (
          <div className={styles.container}>
            <div className={styles.formContainer}>
              <PersonalInfoForm
                onSend={methods.handleSubmit(handleSend)}
                sendingError={sendingError}
                bookingError={bookingError}
              />
            </div>
            <BookingDetails
              dateFrom={dateFrom}
              dateTo={dateTo}
              count={count}
              oldPrice={oldPrice}
              totalPrice={totalPrice}
              extraCount={minBeds}
            />
            {mailLoading ? (
              <div className={styles.loader}>
                <Loader />
              </div>
            ) : null}
          </div>
        )}
      </Section>
    </FormProvider>
  );
}
