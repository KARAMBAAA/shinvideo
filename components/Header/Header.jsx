import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { Logo } from '../../images/bibliotel-logo-v3';
import { fulfiledBooking, selectedRoom } from '../../store';
import { GoHomeButton } from '../GoHomeButton';
import styles from './Header.module.css';

export function Header({ contactData }) {
  const selected = useRecoilValue(selectedRoom);
  const fulfiled = useRecoilValue(fulfiledBooking);

  let whatsappPhone = contactData.phone.replace(/[(|)| |-]/g, '');
  if (whatsappPhone && whatsappPhone[0] === '8') {
    whatsappPhone = whatsappPhone.replace('8', '7');
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <GoHomeButton className={styles.logo}>
          <Logo width="max-width" height="max-height" />
        </GoHomeButton>
        <div className={styles.flex}>
          <a className={classNames(styles.flex, styles.contact)} href={`tel:${contactData.phone}`}>
            <LocalPhoneOutlinedIcon className={styles.icon} />
            <a target="_blank" href={`https://wa.me/${whatsappPhone}`} rel="noreferrer">
              <WhatsAppIcon className={classNames(styles.whatsApp, styles.icon)} />
            </a>
            <span className={styles.number}>{contactData.phone}</span>
          </a>
          <a href="#booking">
            {selected && fulfiled ? (
              <GoHomeButton>
                <button type="button" className={classNames(styles.button, 'button')}>
                  Бронирование
                </button>
              </GoHomeButton>
            ) : (
              <button type="button" className={classNames(styles.button, 'button')}>
                Бронирование
              </button>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
