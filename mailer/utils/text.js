const formUserHtml = (data) => `
    <img src="${data.logo}">
    <p>Спасибо, что выбрали Библиотель!</p>
    <p>Рады сообщить, что вы успешно забронировали номер.</p>
    <h2>Информация о брони:</h2>
    <p>ФИО: ${data.custumerName}</p>
    <p>Телефон: ${data.phone}</p>
    <p>${data.guests}</p>
    <p><b>${data.room}</b></p>
    <p>Даты: <b>${data.fromDate} - ${data.toDate}</b></p>
    <p><b>Ночей: ${data.nightsCount}</b></p>
    <p><b>Сумма: ~ ${data.totalPrice}₽</b></p>
    <p>${data.text}</p>
    <p>Мы находимся по адресу: ${data.hotelAddress}</p>
    <p>По всем вопросам, можете связаться с нами по телефону: ${data.hotelPhone}</p>
`;

const formAdminHtml = (data) => `
    <h2>Информация о новой брони:</h2>
    <p>ФИО: ${data.custumerName}</p>
    <p>Телефон: ${data.phone}</p>
    <p>${data.guests}</p>
    <p><b>${data.room}</b></p>
    <p>Даты: <b>${data.fromDate} - ${data.toDate}</b></p>
    <p>Ночей: <b>${data.nightsCount}</b></p>
    <p>Сумма: <b>${data.totalPrice}</b></p>
    <p>Комментарий: <b>${data.comment}</b></p>
`;

module.exports = {
  formUserHtml,
  formAdminHtml,
};
