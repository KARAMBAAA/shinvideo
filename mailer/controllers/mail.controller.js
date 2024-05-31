const path = require('path');
const { sendBooking } = require('../utils/front24');
const mailer = require('../utils/mailer');
const { formUserHtml, formAdminHtml } = require('../utils/text');

module.exports.sendMail = async ({ body }, res) => {
  try {
    console.log('POST /mail/send', body);

    const isBookingWhell = await sendBooking(body);

    if (isBookingWhell.error) {
      res.status(500).json({ message: 'Booking error' });
      return;
    }

    const attachments = [
      {
        filename: 'logo.png',
        path: path.join(__dirname, '../assets/logo.png'),
        cid: 'logo',
      },
    ];
    const userHtml = formUserHtml({ ...body, logo: 'cid:logo' });
    const adminHtml = formAdminHtml(body);

    // Клиент для отправки email
    Promise.all([
      mailer.sendMail(
        body.hotelEmail,
        body.email,
        'Библиотель: Информация о бронировании',
        userHtml,
        attachments
      ),
      mailer.sendMail(body.hotelEmail, body.hotelEmail, 'Новое бронирование', adminHtml),
    ])
      .then(() => {
        res.status(200).json({ message: 'Sended' });
      })
      .catch((e) => {
        res.status(500).json({ message: 'Server error' });
        throw e;
      });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Server error' });
  }
};
