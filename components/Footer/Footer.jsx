import { Typography } from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import classNames from 'classnames';
import { Section } from '../Section';
import styles from './Footer.module.css';
import { Logo } from '../../images/bibliotel-logo-v3';
import { GoHomeButton } from '../GoHomeButton';

export function Footer({ contactData }) {
  let whatsappPhone = contactData.phone.replace(/[(|)| |-]/g, '');
  if (whatsappPhone && whatsappPhone[0] === '8') {
    whatsappPhone = whatsappPhone.replace('8', '7');
  }

  return (
    <Section bgClass={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <a className={classNames(styles.flex, styles.contact)} href={`tel:${contactData.phone}`}>
            <LocalPhoneOutlinedIcon className={styles.icon} />
            <a target="_blank" href={`https://wa.me/${whatsappPhone}`} rel="noreferrer">
              <WhatsAppIcon className={classNames(styles.whatsApp, styles.icon)} />
            </a>
            <span className={styles.number}>{contactData.phone}</span>
          </a>
          <a
            className={classNames(styles.flex, styles.contact)}
            href={`mailto:${contactData.email}`}
          >
            <EmailOutlinedIcon className={styles.icon} />
            <span className={styles.number}>{contactData.email}</span>
          </a>

          <a
            className={classNames(styles.flex, styles.contact)}
            href="https://yandex.ru/maps/-/CCUJINbT9D"
          >
            <PinDropOutlinedIcon className={styles.icon} sx={{ alignSelf: 'flex-start' }} />
            <Typography lineHeight="1.3rem" textAlign="start">
              {contactData.address}
            </Typography>
          </a>
        </div>

        <GoHomeButton className={styles.logo}>
          <Logo width="100%" height="100%" />
        </GoHomeButton>
      </div>
    </Section>
  );
}
