/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { CustomSlider, Loader, RoomCard, RoomModal } from '../../components';
import styles from './RoomsSection.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetch } from '../../hooks';
import { getRooms } from '../../lib/graphcms';
import { bookingDetails, fulfiledBooking, guests, selectedRoom } from '../../store';
import { checkBooking, formatDate } from '../../utils';
import { Books2SVG } from '../../images/books2';
import { checkAwailable } from '../../lib/frontdesk24';

const newCheckBooking = () => {};

export function RoomsSection() {
  const [checking, setChecking] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [validateRooms, setValidateRooms] = useState([]);
  const selectedRoomState = useRecoilValue(selectedRoom);
  const fulfiled = useRecoilValue(fulfiledBooking);

  const { response, error, loading } = useFetch(getRooms);

  const handleOpen = useCallback(
    (item) => () => {
      setSelected(item);
      setOpen(true);
    },
    []
  );

  useEffect(() => {
    if (!loading) {
      setValidateRooms(response.rooms);
    }
  }, [loading]);

  const handleClose = () => {
    setOpen(false);
  };

  const booking = useRecoilValue(bookingDetails);
  const guestsState = useRecoilValue(guests);

  useEffect(() => {
    const prepareData = async () => {
      if (fulfiled && !selectedRoomState) {
        setChecking(true);
        const roomsWithBeds = response?.rooms.filter(
          (r) => r.bedsCount + r.extraBedsCount >= guestsState.adults || guestsState.adults === 1
        );

        const bookintData = await checkAwailable(booking.fromDate, booking.toDate);

        const availableRooms = await roomsWithBeds.filter(
          (r) => r.roomTypeId && bookintData[r.roomTypeId]?.freeRooms > 0
        );

        setValidateRooms(availableRooms);
        setChecking(false);
      }
      if (!fulfiled) {
        setValidateRooms(response?.rooms || []);
      }
    };
    prepareData();
  }, [fulfiled, loading, booking.fromDate, booking.toDate, guestsState.adults, selectedRoomState]);

  return (
    <section id="#rooms" className={classNames(styles.container, !fulfiled && styles.bgColor)}>
      <Typography
        variant="h2"
        color="#000"
        fontSize={44}
        fontWeight={700}
        component="div"
        textAlign="center"
        className="title"
      >
        {fulfiled ? 'Выберите номер' : 'Номера'}
      </Typography>
      <div className={styles.cardWrapper}>
        {validateRooms.length === 0 ? (
          <Typography
            variant="h3"
            color="#000"
            fontSize={36}
            fontWeight={500}
            component="div"
            textAlign="center"
          >
            Свободных номеров нет, выберите другие даты
          </Typography>
        ) : loading || checking ? (
          <Loader />
        ) : (
          <>
            <CustomSlider extraSettings={{ slidesToShow: 4, slidesToScroll: 4 }}>
              {validateRooms.map((room) => (
                <RoomCard
                  item={room}
                  key={room.title}
                  onOpen={handleOpen(room)}
                  fulfiled={fulfiled}
                />
              ))}
            </CustomSlider>
            {open ? <RoomModal opened={open} onClose={handleClose} item={selected || {}} /> : null}
          </>
        )}
      </div>
      <Books2SVG className={styles.extraSvg} width={150} height={150} />
    </section>
  );
}
