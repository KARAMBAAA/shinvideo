/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box, Card, ClickAwayListener, InputLabel, Typography } from '@mui/material';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './SelectWithIcon.module.css';

export function SelectWithIcon({ onSelect, selected, items }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!selected && items.length > 0) {
      onSelect(items[0].title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleSelect = useCallback(
    (el) => () => {
      onSelect(el);
      setOpen(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <div className={styles.inputGroup}>
          <InputLabel>Гостиница</InputLabel>
          <div
            onClick={handleClick}
            className={classNames(styles.select, open && styles.selectOpen)}
          >
            <PinDropOutlinedIcon className={styles.icon} />
            <Typography className={styles.selectContent}>
              {selected || 'Выберите гостиницу'}
            </Typography>
          </div>
        </div>
        {open ? (
          <Box className={styles.dropdown}>
            <Card sx={{ padding: 1 }} className={styles.dropdownContainer}>
              {items.map((i) => (
                <buuton
                  key={i.id}
                  variant="text"
                  className={styles.dropdownElement}
                  onClick={handleSelect(i.title)}
                >
                  {i.title}
                </buuton>
              ))}
            </Card>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
