import { useEffect, useState } from 'react';

// https://fa95-194-85-115-170.eu.ngrok.io/mail/send

export const useEmailSend = (body) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fa95-194-85-115-170.eu.ngrok.io/mail/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        setResponse(res);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};
