import { useRecoilValue } from 'recoil';
import loadable from '@loadable/component';
import { useEffect, useState } from 'react';
import { MainLayout } from '../../layouts/MainLoayut';
import { fulfiledBooking, selectedRoom } from '../../store';
import { RoomsSection } from '../RoomsSection';
import { OrderSection } from '../OrderSection';
import { MainSection } from '../MainSection';
import { PopularSection } from '../PopularSection';
import { GalerySection } from '../GalerySection';
import { ReviewsSection } from '../ReviewsSection';
import { AboutSection } from '../AboutSection';

const MapSection = loadable(() => import('../MapSection/MapSection'), { ssr: false });

export function Home() {
  const selected = useRecoilValue(selectedRoom);
  const fulfiled = useRecoilValue(fulfiledBooking);

  return (
    <MainLayout>
      <MainSection />
      {selected && fulfiled ? <OrderSection /> : <RoomsSection fulfiled={fulfiled} />}
      {!fulfiled && (
        <>
          <PopularSection />
          <GalerySection />
          <ReviewsSection />
          <MapSection />
          <AboutSection />
        </>
      )}
    </MainLayout>
  );
}
