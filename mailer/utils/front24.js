const request = require('request');

module.exports.sendBooking = (data) =>
  new Promise((res, rej) => {
    const {
      adults,
      children,
      nightsCount,
      totalPrice,
      custumerName,
      roomId,
      phone,
      email,
      comment,
    } = data;

    const formData = {
      from: `${data.fromDate} 14:00`,
      to: `${data.toDate} 12:00`,
      cn: adults,
      children,
      roomTypeId: roomId,
      byBed: 0,
      boardingId: 0,
      tariffId: 23916,
      noBed: 0,
      guestName: custumerName,
      comment,
      phone,
      email,
      token: '65B4F68E-77CE-4050-AF6F-6F6EFF268FBF',
      source: 'https://bibliotel.ru',
      paygate: 1,
      price: totalPrice,
      prepayment: 0.0,
    };

    request(
      {
        url: 'https://pms.frontdesk24.ru/BookingWidgetFront/CreateReservation.aspx',
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'cache-control': 'no-cache',
          'postman-token': '37b81511-01cb-efb1-ad59-306625b293d5',
        },
        form: formData,
      },
      (err, _, body) => {
        if (err) {
          rej(err);
          return;
        }
        res(JSON.parse(body));
      }
    );
  });
