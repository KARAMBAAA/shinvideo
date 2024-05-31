/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSetRecoilState } from 'recoil';
import { fulfiledBooking, selectedRoom, bookingDetails, defaultBooking, guests } from '../../store';

export function GoHomeButton({ className, children }) {
  const setGuests = useSetRecoilState(guests);
  const setBooking = useSetRecoilState(bookingDetails);
  const setSelected = useSetRecoilState(selectedRoom);
  const setFulfiled = useSetRecoilState(fulfiledBooking);

  return (
    <a
      to="/#booking"
      className={className}
      onClick={() => {
        setBooking(defaultBooking);
        setFulfiled(false);
        setSelected(null);
        setGuests({ adults: 1, childrens: 0 });
      }}
    >
      {children}
    </a>
  );
}
