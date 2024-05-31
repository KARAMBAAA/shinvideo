import { Card, CardHeader, Typography } from '@mui/material';
import styles from './OrderCard.module.css';

export function OrderCard({ title, children }) {
  return (
    <Card className={styles.container}>
      <CardHeader title={title} className={styles.header} />
      {children}
    </Card>
  );
}
