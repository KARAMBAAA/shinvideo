import { Box, Typography } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styles from './OrderSection.module.css';
import { GoHomeButton } from '../../components';

export function SendedBlock({ formResult, dateFrom, dateTo, count }) {
  return (
    <Box className={styles.complited} width="100%">
      <Box mb="20px" sx={{ display: 'grid', minWidth: '50%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Номер:</Typography>{' '}
          <Typography variant="body2">
            <b>{formResult.room}</b>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Период:</Typography>{' '}
          <Typography variant="body2">
            <b>
              {dateFrom} - {dateTo}
            </b>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Ночей:</Typography>{' '}
          <Typography variant="body2">
            <b>{count}</b>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Количество гостей:</Typography>{' '}
          <Typography variant="body2">
            <b>{formResult.guests}</b>
          </Typography>
        </Box>
        <Box m={1} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">ФИО:</Typography>{' '}
          <Typography variant="body2">
            <b>{formResult.custumerName}</b>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Телефон:</Typography>{' '}
          <Typography variant="body2">
            <b>{formResult.phone}</b>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2">Электронный адрес:</Typography>{' '}
          <Typography variant="body2">
            <b>{formResult.email}</b>
          </Typography>
        </Box>
      </Box>

      <CheckCircleOutlinedIcon sx={{ fontSize: 60 }} />

      <GoHomeButton className={styles.goHome}>
        <buttom type="button" className="button">
          На главную
        </buttom>
      </GoHomeButton>
    </Box>
  );
}
