import { Typography } from '@mui/material';
import classNames from 'classnames';
import { Logo } from '../../images/bibliotel-logo-v3';
import styles from './EmptyPhoto.module.css';

export function EmptyPhoto({ className }) {
  return (
    <div className={classNames(className, styles.emptyPhoto)}>
      <Logo width="50%" />
      <Typography fontWeight={600} color="GrayText">
        Нет фото
      </Typography>
    </div>
  );
}
