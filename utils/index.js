import * as dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const debounse = (delay = 300) =>
  new Promise((res) => {
    setTimeout(() => res(true), delay);
  });

const FORMAT = 'YYYY-MM-DD';

export const formatDate = (date) => dayjs(date).format(FORMAT);
export const parseDate = (date, format = FORMAT) => dayjs(date, format).toDate();

export const checkBooking = (booking, userBooking, rooms) => {
  const roomsInfo = {};
  rooms.forEach((r) => {
    roomsInfo[r.id] = r.roomsCount;
  });
  const armored = [];

  booking.forEach((b) => {
    const dateFrom = parseDate(b.from, 'YYYY-MM-DD');
    const dadeTo = parseDate(b.to, 'YYYY-MM-DD');
    const userFrom = userBooking.fromDate;
    const userTo = userBooking.toDate;

    if (userFrom >= dateFrom && userFrom <= dadeTo) {
      armored.push(b.rooms.id);
      return;
    }

    if (userTo >= dateFrom && userTo <= dadeTo) {
      armored.push(b.rooms.id);
      return;
    }

    if (userFrom <= dateFrom && userTo >= dadeTo) {
      armored.push(b.rooms.id);
    }
  });

  for (let i = 0; i < armored.length; i += 1) {
    if (roomsInfo[armored[i]]) {
      roomsInfo[armored[i]] -= 1;
    }
  }

  return roomsInfo;
};

// Для подгонки всех карточек под один размер
export const checkLongest = (selector) => {
  let max = 0;
  const data = document.getElementsByClassName(selector);
  if (data.length) {
    for (let i = 0; i <= data.length - 1; i += 1) {
      if (data[i].clientHeight > max) {
        max = data[i].clientHeight;
      }
    }
  }

  return max;
};
