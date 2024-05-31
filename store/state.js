import { atom } from 'recoil';
import { getSeoData } from '../lib/graphcms';

const nowDate = new Date();
const toDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);

export const seoData = atom({
  key: 'seoData',
  default: getSeoData(),
});

export const hotelContacts = atom({
  key: 'hotelContacts',
  default: {
    address: '',
    email: '',
    phone: '',
  },
});

export const defaultBooking = {
  fromDate: nowDate,
  toDate,
  hotel: null,
};

export const bookingDetails = atom({
  key: 'bookingDetails',
  default: defaultBooking,
});

export const guests = atom({
  key: 'extraBeds',
  default: { adults: 1, childrens: 0 },
});

export const fulfiledBooking = atom({
  key: 'fulfiledBooking',
  default: false,
});

export const selectedRoom = atom({
  key: 'selectedRoom',
  default: null,
});
