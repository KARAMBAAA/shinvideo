import { useEffect, useRef } from 'react';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import styless from './MapSection.module.css';

function MapSection() {
  return (
    <section className={styless.container}>
      <YMaps>
        <Map
          defaultState={{
            center: [47.22824, 39.725559],
            zoom: 15,
          }}
          className={styless.map}
        >
          <Placemark
            geometry={[47.22824, 39.725559]}
            properties={{
              balloonContent: 'Это красивая метка',
              hintContent: 'lol',
              iconContent: null,
            }}
            defaultProperties={{ balloonContent: 'Это красивая метка', hintContent: 'lol' }}
          />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </YMaps>
      <svg
        className={styless.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        width="100%"
        height="100px"
      >
        <path d="M0 10 0 0 A 90 59, 0, 0, 0, 100 0 L 100 10 Z" />
      </svg>
    </section>
  );
}

export default MapSection;
