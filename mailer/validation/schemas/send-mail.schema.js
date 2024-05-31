const Joi = require('joi').extend(require('@joi/date'));

const phonePattern =
  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

module.exports = Joi.object({
  custumerName: Joi.string(),
  guests: Joi.string(),
  room: Joi.string(),
  pricePerNight: Joi.number(),
  fromDate: Joi.date().format('YYYY-MM-DD').utc(),
  toDate: Joi.date().format('YYYY-MM-DD').utc(),
  nightsCount: Joi.number(),
  totalPrice: Joi.number(),
  price: Joi.number(),
  text: Joi.string(),
  hotelEmail: Joi.string().email(),
  hotelPhone: Joi.string()
    .pattern(phonePattern)
    .message({ 'string.pattern.base': '{{#label}} is invalid' }),
  hotelAddress: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string()
    .pattern(phonePattern)
    .message({ 'string.pattern.base': '{{#label}} is invalid' }),
  roomId: Joi.number(),
  adults: Joi.number(),
  children: Joi.number(),
  comment: Joi.string().min(0),
});
