import React from 'react';
import { InputLabel, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ruLocale from 'date-fns/locale/ru';
import styles from './CalendarInput.module.css';

const nowDate = new Date();
const maxDate = new Date(nowDate.getFullYear() + 1, nowDate.getMonth(), nowDate.getDate());

export function CalendarInput({ label, onSetData, date, datefrom }) {
  const handleChange = (newValue) => {
    onSetData(newValue);
  };

  return (
    <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
      <div className={styles.inputGroup}>
        <InputLabel>{label}</InputLabel>
        <DesktopDatePicker
          inputFormat="dd.MM.yyyy"
          className={styles.pointer}
          minDate={datefrom || nowDate}
          maxDate={maxDate}
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} size="small" fullWidth />}
        />
      </div>
    </LocalizationProvider>
  );
}
