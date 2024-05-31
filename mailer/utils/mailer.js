const nodemailer = require('nodemailer');
require('dotenv').config();

// let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME || '', // generated ethereal user
    pass: process.env.MAIL_PASSWORD || '', // generated ethereal password
  },
});

module.exports.sendMail = async (from, to, subject, html, attachments) => {
  try {
    return transporter.sendMail({ from, to, subject, html, attachments });
  } catch (e) {
    console.log('Sending Error', e.message);
  }
};
