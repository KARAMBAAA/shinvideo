import { CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { useRecoilValue } from 'recoil';
import { CustomTooltip, OrderCard } from '../../components';
import styles from './BookingDetails.module.css';
import { bookingDetails, selectedRoom } from '../../store';

export function BookingDetails({ dateFrom, dateTo, count, totalPrice, extraCount = '', oldPrice }) {
  const bookingDetailsState = useRecoilValue(bookingDetails);

  const room = useRecoilValue(selectedRoom) || {};

  if (!room.id) {
    return null;
  }

  return (
    <OrderCard title="Детали бронирования">
      {(room.images || [])[0]?.urlModal ? (
        <CardMedia
          component="img"
          height="194"
          image={(room.images || [])[0]?.urlModal}
          alt="Paella dish"
        />
      ) : null}
      <CardContent>
        <div className={styles.formContent}>
          <div className={styles.formTop}>
            <Typography variant="h4" className={styles.title}>
              {room.title}
            </Typography>
            <Typography>{bookingDetailsState.hotel}</Typography>
          </div>
          <div className={styles.formBlock}>
            <div className={styles.formText}>
              <CalendarMonthOutlinedIcon fontSize="small" />
              <Typography variant="subtitle1" fontWeight={700} textAlign="left">
                Заезд
              </Typography>
            </div>
            <Typography>{dateFrom}</Typography>
          </div>
          <div className={styles.formBlock}>
            <div className={styles.formText}>
              <CalendarMonthOutlinedIcon fontSize="small" />
              <Typography variant="subtitle1" fontWeight={700} textAlign="left">
                Выезд
              </Typography>
            </div>
            <Typography>{dateTo}</Typography>
          </div>
          <div className={styles.formBlock}>
            <div className={styles.formText}>
              <ScheduleOutlinedIcon fontSize="small" />
              <Typography variant="subtitle1" fontWeight={700} textAlign="left">
                Ночей
              </Typography>
            </div>
            <Typography>{count}</Typography>
          </div>
          {extraCount ? (
            <>
              <div className={styles.formBlock}>
                <div className={styles.formText}>
                  <PeopleOutlinedIcon fontSize="small" />
                  <Typography variant="subtitle1" fontWeight={700} textAlign="left">
                    Дополнительные места
                  </Typography>
                  <CustomTooltip text="Дополнительные места требуют доплаты в размере 800 ₽/место." />
                </div>
                <Typography>{extraCount}</Typography>
              </div>
              <Typography mt="-20px" color="text.secondary" variant="caption">
                Каждое место свыше 2 является дополнительным
              </Typography>
            </>
          ) : null}
          <div className={styles.formBlock}>
            <div className={styles.formText}>
              <PaidOutlinedIcon fontSize="small" />
              <div className={styles.costAll}>
                <Typography variant="subtitle1" fontWeight={700} textAlign="left">
                  Сумма
                </Typography>
              </div>
              <CustomTooltip text="Итог складывается из минимальной стоимости номера и доплаты за доп. места." />
            </div>
            <Typography>
              {oldPrice ? (
                <span style={{ color: '#00000050' }}>
                  <del>{oldPrice}</del>&nbsp;
                </span>
              ) : (
                ''
              )}
              {totalPrice}&nbsp;₽
            </Typography>
          </div>
          <Typography mt="-20px" color="text.secondary" variant="caption">
            Оплата при заезде
          </Typography>
        </div>
      </CardContent>
    </OrderCard>
  );
}
