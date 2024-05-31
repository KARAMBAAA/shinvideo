/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box, Card, ClickAwayListener, Fab, InputLabel, Typography } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import classNames from 'classnames';
import styles from './AdditionalSelect.module.css';

export function AdditionalSelect({ extraBeds, setData, maxCount }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const changeAdults = (type) => () => {
    if (type === 'plus') {
      setData((prev) => {
        if (prev.adults >= 9) return { ...prev };
        return { ...prev, adults: prev.adults + 1 };
      });
    }
    if (type === 'minus') {
      setData((prev) => {
        if (prev.adults <= 1) return { ...prev, adults: 1 };
        return { ...prev, adults: prev.adults - 1 };
      });
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <div className={styles.inputGroup}>
          <InputLabel>Гости</InputLabel>
          <div
            onClick={handleClick}
            className={classNames(styles.select, open && styles.selectOpen)}
          >
            <Typography className={styles.selectContent}>{`Гости ${extraBeds.adults}`}</Typography>
          </div>
        </div>
        {open ? (
          <Box className={styles.dropdown}>
            <Card sx={{ padding: 1 }} className={styles.dropdownContainer}>
              <div className={styles.dropdownElement}>
                <span>Гости</span>
                <div className={styles.dropdownCounter}>
                  <Fab
                    className={styles.additionalButton}
                    size="small"
                    color="inherit"
                    aria-label="add"
                    onClick={changeAdults('minus')}
                    disabled={extraBeds.adults === 1}
                  >
                    <RemoveOutlinedIcon className={styles.additionalIcon} />
                  </Fab>{' '}
                  <Typography px={1}>{extraBeds.adults}</Typography>
                  <Fab
                    className={styles.additionalButton}
                    size="small"
                    color="inherit"
                    aria-label="add"
                    onClick={changeAdults('plus')}
                    disabled={extraBeds.adults === maxCount}
                  >
                    <AddIcon className={styles.additionalIcon} />
                  </Fab>
                </div>
              </div>
            </Card>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
