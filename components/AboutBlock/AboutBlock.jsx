import { Typography } from '@mui/material';
import styles from './AboutBlock.module.css';

export function AboutBlock({ title, text, children, mb = '20px' }) {
  return (
    <div className={styles.block}>
      <div style={{ marginBottom: mb }}>{children}</div>

      <Typography
        variant="body"
        color="#000"
        fontWeight={500}
        gutterBottom
        letterSpacing="0.5px"
        component="div"
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="#000"
        component="div"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
