import { Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useFetch } from '../../hooks';
import { getHotel } from '../../lib/graphcms';
import { bookingDetails, fulfiledBooking, guests, selectedRoom } from '../../store';
import { AdditionalSelect } from './AdditionalSelect';
import { CalendarInput } from './CalendarInput';
import styles from './FormCard.module.css';
import { SelectWithIcon } from './SelectWithIcon';

export function FormCard() {
  const selected = useRecoilValue(selectedRoom);
  const fulfiled = useRecoilValue(fulfiledBooking);
  const setFulfiled = useSetRecoilState(fulfiledBooking);
  const setSelected = useSetRecoilState(selectedRoom);

  const bookingDetailsState = useRecoilValue(bookingDetails);
  const setBookingDetails = useSetRecoilState(bookingDetails);
  const room = useRecoilValue(selectedRoom);

  const extraBedsState = useRecoilValue(guests);
  const setExtraBeds = useSetRecoilState(guests);

  const goBackHandler = () => {
    setSelected(null);
  };

  const handleChangindDetails = (type) => (value) =>
    setBookingDetails((prev) => ({ ...prev, [type]: value }));

  const { response } = useFetch(getHotel);

  return (
    <div className={styles.container}>
      {fulfiled ? null : (
        <Typography
          variant="h2"
          color="#fff"
          fontWeight={700}
          className={styles.title}
          component="div"
        >
          Литературный отель
          <br className={styles.hideMobile} /> в центре Ростова&#8209;на&#8209;Дону
        </Typography>
      )}
      <div className={styles.card}>
        <form className={styles.formWrapper}>
          <SelectWithIcon
            onSelect={handleChangindDetails('hotel')}
            items={response || []}
            selected={bookingDetailsState.hotel}
          />
          <CalendarInput
            label="Заезд"
            onSetData={handleChangindDetails('fromDate')}
            date={bookingDetailsState.fromDate}
            type="from"
          />
          <CalendarInput
            label="Выезд"
            onSetData={handleChangindDetails('toDate')}
            datefrom={
              new Date(
                bookingDetailsState.fromDate.getFullYear(),
                bookingDetailsState.fromDate.getMonth(),
                bookingDetailsState.fromDate.getDate() + 1
              )
            }
            date={bookingDetailsState.toDate}
            type="to"
          />
          <AdditionalSelect
            extraBeds={extraBedsState}
            setData={setExtraBeds}
            maxCount={(room?.extraBedsCount || 0) + (room?.bedsCount || 0) || 5}
          />
        </form>
        <div className={styles.bottonContainer}>
          {fulfiled && selected ? (
            <button type="button" className={styles.back} onClick={goBackHandler}>
              <ArrowBackIosIcon sx={{ fontSize: 15 }} />
              <span>К&nbsp;Номерам</span>
            </button>
          ) : null}
          <a href="#rooms">
            <button type="button" className="button" onClick={() => setFulfiled(true)}>
              {fulfiled && selected ? 'Применить' : 'Забронировать'}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
