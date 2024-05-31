import { Box, Card, CardContent, Rating, Typography } from '@mui/material';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import styles from './ReviewCard.module.css';

export function ReviewCard({ item, maxCardHeight }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      className={classNames(styles.cardBody, 'review-card')}
      sx={{ height: open ? 'auto' : maxCardHeight || 'auto' }}
    >
      <Typography className={styles.reviewText} variant="body" component="div">
        {item.text.length > 342 && !open ? (
          <>
            {item.text.substring(0, 342)}...
            <Box display="flex" justifyContent="center">
              <button type="button" className={styles.showMore} onClick={handleOpen}>
                <Typography variant="body" fontSize={16} component="span">
                  Показать весь
                </Typography>
              </button>
            </Box>
          </>
        ) : (
          item.text
        )}
      </Typography>
      <Typography variant="body">{item.author}</Typography>
      <Rating name="read-only" value={5} readOnly />
    </Card>
  );
}
