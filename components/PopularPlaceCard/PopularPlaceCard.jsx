import { Card, CardContent, Typography } from '@mui/material';
import styles from './PopularPlaceCard.module.css';

export function PopularPlaceCard({ item = {} }) {
  return (
    <Card className={styles.card} key={item.title}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.workingHours || ''}
        </Typography>
        <Typography variant="body2" mt={1} fontWeight={600} color="text.secondary">
          {item.address}
        </Typography>
        <div className={styles.cardFooter}>
          <Typography variant="body2" color="text.secondary">
            {item.distance} км
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
