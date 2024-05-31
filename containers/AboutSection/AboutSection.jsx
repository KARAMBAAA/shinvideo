/* eslint-disable react/style-prop-object */
import { Typography } from '@mui/material';
import { AboutBlock, Section } from '../../components';
import styles from './AboutSection.module.css';

import Air from '../../images/airplane-take-off';
import Train from '../../images/train';
import Car from '../../images/car';
import { Books3SVG } from '../../images/books3';

export function AboutSection() {
  return (
    <Section extraSvg={<Books3SVG className={styles.extraSvg} width={150} height={150} />}>
      <div className={styles.container}>
        <Typography
          variant="h3"
          color="#000"
          fontWeight={700}
          component="div"
          textAlign="center"
          fontSize={40}
          className="title"
        >
          Как добраться
        </Typography>
        <div className={styles.wrapper}>
          <AboutBlock
            title="ИЗ АЭРОПОРТА PLATOV"
            mb="5px"
            text={`Автобус № 700 до остановки "Пригородный вокзал", оттуда Автобусы № 3, 3а, 7, 67, 40, 29, 85 - примерно 1,5 часа. 45 минут на такси.`}
          >
            <Air height="100%" className={styles.svgAir} />
          </AboutBlock>
          <AboutBlock
            title="С Ж/Д И АВТО ВОКЗАЛА"
            text="Автобус № 24, 3, 3а, 7 или Троллейбус № 9, 5 - примерно 24 минуты. Или примерно 40 минут пешком"
          >
            <Train height="100%" className={styles.svg} />
          </AboutBlock>
          <AboutBlock
            title="НА ЛИЧНОМ АВТО"
            text="Рядом с отелем распологается несколько удобных парковок. Есть небольшая парковка на территории."
          >
            <Car height="100%" className={styles.svg} />
          </AboutBlock>
        </div>
      </div>
    </Section>
  );
}
