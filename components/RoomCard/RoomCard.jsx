import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './RoomCard.module.css';
import { Loader } from '../Loader';
import { bookingDetails, guests, selectedRoom } from '../../store';
import { checkLongest, debounse } from '../../utils';
import { EmptyPhoto } from '../EmptyPhoto';
import { PriceBlock } from '../PriceBlock';

export function RoomCard({ fulfiled, item = {}, onOpen }) {
  const setSelected = useSetRecoilState(selectedRoom);

  const bookingDetailsState = useRecoilValue(bookingDetails);
  const guestsState = useRecoilValue(guests);

  const [updated, setUpdated] = useState(false);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  useEffect(() => {
    debounse().then((d) => setUpdated(true));
  }, []);

  useEffect(() => {
    if (updated) {
      setMaxCardHeight(checkLongest('room-çard'));
    }
  }, [updated]);

  const handleSelectRoom = () => {
    setSelected(item);
  };

  if (!updated) {
    return <Loader />;
  }

  return (
    <Card
      className={classNames(styles.card, 'room-çard')}
      sx={{ height: maxCardHeight || 'auto' }}
      onClick={onOpen}
    >
      <div className={styles.gridWrapper}>
        {((item.images || [])[0] || {}).urlMin ? (
          <div className={styles.imageWrapper}>
            <CardMedia
              loading="lazy"
              component="img"
              image={((item.images || [])[0] || {}).urlMin}
              alt={item.altText}
              className={styles.image}
            />
            {item.discountPrice ? (
              <div className={styles.discount}>
                -{100 - Math.round((item.discountPrice / item.price).toFixed(2) * 100)}%
              </div>
            ) : null}
          </div>
        ) : (
          <EmptyPhoto className={styles.image} />
        )}
        <CardContent className={styles.flexWrapper}>
          <Typography variant="h5" fontSize={20} component="div" className={styles.title}>
            {item.title || ''}
          </Typography>
          <div>
            <div className={styles.places}>
              <Typography variant="h6" fontWeight={600} component="span" mt="2px">
                {item.bedsCount + (item.extraBedsCount || 0) || ''}
              </Typography>
              <PeopleOutlinedIcon />
            </div>
            <div className={styles.cardFooter}>
              <div>
                <PriceBlock item={item} />
              </div>
              <div className={styles.cardAction}>
                {fulfiled ? (
                  <button type="button" className="button" onClick={handleSelectRoom}>
                    Выбрать
                  </button>
                ) : (
                  <button type="button" className="button" onClick={onOpen}>
                    Подробнее
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
