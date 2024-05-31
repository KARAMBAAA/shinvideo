import { Box, Card, CardContent, Button, CardMedia, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import { CustomSlider } from '../CustomSlider';
import styles from './RoomModal.module.css';
import { checkLongest, debounse } from '../../utils';
import { EmptyPhoto } from '../EmptyPhoto';
import { PriceBlock } from '../PriceBlock';

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [],
};

export function RoomModal({ opened, onClose, item }) {
  const [updated, setUpdated] = useState(false);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  useEffect(() => {
    debounse(500).then((d) => setUpdated(true));
  }, []);

  useEffect(() => {
    if (updated) {
      setMaxCardHeight(checkLongest('modal-image'));
    }
  }, [updated]);

  return (
    <Modal open={opened} onClose={onClose}>
      <Box className={styles.modal}>
        <Card className={styles.card}>
          <Box className={styles.cardHeader}>
            <div>
              <Typography variant="h5" component="div">
                {item.title || ''}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {item.hotel?.title || ''}
              </Typography>
            </div>
            <Button color="inherit" className={styles.closeButton} onClick={onClose}>
              <CloseIcon />
            </Button>
          </Box>
          <CardContent className={styles.cardBody}>
            <div className={styles.cardScroll}>
              <div className={styles.mainInfo}>
                <div className={styles.sliderWrapper}>
                  <div className={styles.sliderContainer}>
                    {!item.images?.length ? (
                      <EmptyPhoto className={styles.photo} />
                    ) : (
                      <CustomSlider extraSettings={settings}>
                        {item.images.map((image) => (
                          <Box
                            key={image.id}
                            className={styles.modalContainer}
                            sx={{
                              height: maxCardHeight || 'auto',
                            }}
                          >
                            <CardMedia
                              key={image.id}
                              className={classNames(
                                styles.photo,
                                'modal-image',
                                maxCardHeight > 0 ? null : styles.hide
                              )}
                              component="img"
                              image={image.urlModal}
                              alt="номер"
                            />
                          </Box>
                        ))}
                      </CustomSlider>
                    )}
                  </div>
                </div>
                <Box pl={2} className={styles.roomBooking}>
                  <div>
                    <Box className={styles.priceWrapper}>
                      <Box mr={2}>
                        <PriceBlock item={item} forModal />
                      </Box>
                      <Box display="flex" alignItems="center">
                        <PeopleOutlinedIcon sx={{ fontSize: 38 }} />
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          fontSize={30}
                          component="span"
                          className={styles.bedsCount}
                        >
                          {item.bedsCount}
                          <Typography color="gray" fontWeight={500} fontSize={26} mb="4px" ml="8px">
                            {item.extraBedsCount ? `+ ${item.extraBedsCount}` : null}
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    {item.description?.html && (
                      <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
                    )}
                  </div>
                  <a href="#booking">
                    <button type="button" className="button" onClick={onClose}>
                      Бронирование
                    </button>
                  </a>
                </Box>
              </div>
              {item.amenitiesID?.length ? (
                <>
                  <div>
                    <Typography variant="h5" my={2} component="div" fontWeight={700}>
                      Удобства в номере
                    </Typography>
                  </div>
                  <div className={styles.cardFooter}>
                    {(item.amenitiesID || []).map((a) => (
                      <Box key={a.id} display="flex" mr={1}>
                        <CheckOutlinedIcon />
                        <Typography variant="body1" lineHeight={1.3} component="div" ml={1}>
                          {a.title}
                        </Typography>
                      </Box>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
}
