export const handleContactMessage = async (contactData) => {
  const fetchedData = fetch(`${process.env.MAIL_HOST}/mail/send`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(contactData),
  })
    .then((d) => d.ok)
    .then((d) => d)
    .catch((e) => false);

  return fetchedData;
};
