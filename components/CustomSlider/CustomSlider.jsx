import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import classNames from 'classnames';
import styles from './CustomSlider.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const isDisable = props.className?.split(' ').includes('slick-disabled');
  return (
    <button
      type="button"
      className={classNames(props.className, styles.StockArrow)}
      style={{ ...props.style, right: '12px' }}
      onClick={props.onClick}
    >
      <div className={classNames(styles.ArrowButton, isDisable && styles.Disable)}>
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
      </div>
    </button>
  );
}

function SamplePrevArrow(props) {
  const isDisable = props.className?.split(' ').includes('slick-disabled');
  return (
    <button
      type="button"
      className={classNames(props.className, styles.StockArrow)}
      style={{ ...props.style, zIndex: 100, left: '-12px' }}
      onClick={props.onClick}
    >
      <div className={classNames(styles.ArrowButton, isDisable && styles.Disable)}>
        <ArrowBackIosIcon sx={{ fontSize: 18 }} />
      </div>
    </button>
  );
}

export function CustomSlider({ children, extraSettings, goToSlide }) {
  const slicjRef = useRef(null);

  useEffect(() => {
    slicjRef.current.slickGoTo(goToSlide, true);
  }, [goToSlide]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    ...extraSettings,
  };

  return (
    <Slider ref={slicjRef} {...settings} className={styles.lol}>
      {children}
    </Slider>
  );
}
