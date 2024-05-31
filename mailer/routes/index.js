const router = require('express').Router();
const { sendMail } = require('../controllers/mail.controller');
const sendMailSchema = require('../validation/schemas/send-mail.schema');
const validator = require('../validation');

router.post('/mail/send', validator(sendMailSchema), sendMail);

module.exports = router;
