import { formatDate } from '../utils';

export const checkAwailable = async (arrival, departure) => {
  const propeared = {};
  try {
    const response = await fetch(
      `https://pms.frontdesk24.ru/api/online/Availables?token=65B4F68E-77CE-4050-AF6F-6F6EFF268FBF&arrival=${formatDate(
        arrival
      )}&departure=${formatDate(departure)}`
    );

    const data = await response.json();

    for (let i = 0; i < data.length; i += 1) {
      const element = data[i];
      propeared[element.roomTypeId] = element;
    }

    return propeared;
  } catch (e) {
    console.log('bookingData Error: ', e.message);
    return propeared;
  }
};
