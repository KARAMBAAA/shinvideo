// TODO: поправить ошибки eslint

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { CustomSlider, Loader, Section } from '../../components';
import styles from './GalerySection.module.css';
import { useFetch } from '../../hooks';
import { getGalery } from '../../lib/graphcms';
import { CandleSVG } from '../../images/books';

export function GalerySection() {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const { response, error, loading } = useFetch(getGalery);

  const handleOpen = (idx) => () => {
    setSelectedPhoto(idx);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedPhoto,
    responsive: [],
  };

  return (
    <Section extraSvg={<CandleSVG className={styles.extraSvg} width={150} height={150} />}>
      <div className={styles.wrapper}>
        <Typography
          variant="h3"
          color="#000"
          fontWeight={700}
          component="div"
          textAlign="center"
          fontSize={40}
          className="title"
        >
          Галерея
        </Typography>

        {loading ? (
          <Loader />
        ) : (
          <>
            <Typography variant="body">Фотографии апартаментов</Typography>
            <div className={styles.galery}>
              {response.map((photo, id) => (
                <div key={photo.id} className={styles.photo}>
                  <Image
                    loading="lazy"
                    objectFit="contain"
                    className={styles.photo}
                    width={photo.width}
                    height={photo.height}
                    src={photo.urlMin}
                    alt={photo.description}
                    onClick={handleOpen(id)}
                  />
                </div>
              ))}
            </div>
            <Modal
              open={open}
              keepMounted
              onClose={handleClose}
              BackdropProps={{ className: styles.modalBg }}
            >
              <Box className={styles.modal}>
                <Button color="inherit" className={styles.closeButton} onClick={handleClose}>
                  <CloseIcon sx={{ fill: '#fff', fontSize: 40 }} />
                </Button>
                <div className={styles.sliderWrapper}>
                  <div className={styles.sliderContainer}>
                    <CustomSlider extraSettings={settings} goToSlide={selectedPhoto}>
                      {response.map((photo, id) => (
                        <div key={photo.id} className={styles.modalContainer} onClick={handleClose}>
                          <Image
                            loading="lazy"
                            width={photo.width}
                            height={photo.height}
                            src={photo.url}
                            alt={photo.description}
                            className={styles.modalPhoto}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            blurDataURL={photo.urlMin}
                            placeholder="blur"
                          />
                          <div className={styles.photoDescription}>
                            <Typography color="#fff" fontSize={20}>
                              {photo.description}
                            </Typography>
                          </div>
                        </div>
                      ))}
                    </CustomSlider>
                  </div>
                </div>
              </Box>
            </Modal>
          </>
        )}
      </div>
    </Section>
  );
}
