import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CustomSlider, Loader, ReviewCard, Section } from '../../components';
import { useFetch } from '../../hooks';
import { getReviews } from '../../lib/graphcms';
import { checkLongest, debounse } from '../../utils';
import styles from './ReviewsSection.module.css';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function ReviewsSection() {
  const { response, error, loading } = useFetch(getReviews);
  const [updated, setUpdated] = useState(false);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  useEffect(() => {
    debounse().then((d) => setUpdated(true));
  }, []);

  useEffect(() => {
    if (updated) {
      setMaxCardHeight(checkLongest('review-card'));
    }
  }, [updated]);

  return (
    <Section bgClass={styles.bgColor}>
      <div className={styles.container}>
        <Typography
          variant="h3"
          color="#000"
          fontWeight={700}
          gutterBottom
          component="div"
          textAlign="center"
          fontSize={40}
          className="title"
        >
          Отзывы
        </Typography>
        <div className={styles.cardsWrapper}>
          {loading ? (
            <Loader />
          ) : (
            <CustomSlider extraSettings={settings}>
              {response.map((review) => (
                <ReviewCard key={review.id} maxCardHeight={maxCardHeight} item={review} />
              ))}
            </CustomSlider>
          )}
        </div>
      </div>
    </Section>
  );
}
