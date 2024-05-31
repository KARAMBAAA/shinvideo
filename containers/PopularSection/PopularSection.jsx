import { Typography, Stack, Chip } from '@mui/material';
import { useCallback, useState } from 'react';
import { Section, RoomCard, Loader } from '../../components';
import { PopularPlaceCard } from '../../components/PopularPlaceCard/PopularPlaceCard';
import { useFetch } from '../../hooks';
import { getPopular } from '../../lib/graphcms';
import styles from './PopularSection.module.css';

export function PopularSection() {
  const [selected, setSelected] = useState();
  const { response, error, loading } = useFetch(getPopular);

  const handleClick = useCallback(
    (c) => () => {
      setSelected(c);
    },
    []
  );
  return (
    <Section bgClass={styles.bgColor}>
      <div className={styles.wrapper}>
        <Typography
          variant="h2"
          color="#000"
          fontSize={44}
          fontWeight={700}
          gutterBottom
          component="div"
          textAlign="center"
          className="title"
        >
          Места рядом
        </Typography>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Stack
              direction="row"
              spacing={1}
              paddingBottom={4}
              flexWrap="wrap"
              gap={1}
              justifyContent="center"
            >
              <Chip
                label="Все"
                variant="outlined"
                onClick={handleClick()}
                sx={{ backgroundColor: !selected ? '#00000010' : 'inherit' }}
              />
              {response.categories.map((c) => (
                <Chip
                  key={c.id}
                  label={c.title}
                  variant="outlined"
                  onClick={handleClick(c.title)}
                  sx={{ backgroundColor: selected === c.title ? '#00000010' : 'inherit' }}
                />
              ))}
            </Stack>
            <div className={styles.cardsContainer}>
              {(!selected ? response.popular.slice(0, 9) : response.popular)
                .filter((p) => (selected ? p.category?.title === selected : true))
                .map((place) => (
                  <PopularPlaceCard item={place} key={place.id} />
                ))}
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
