import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Footer, Header, Loader } from '../components';
import { useFetch } from '../hooks';
import { getContactInfo } from '../lib/graphcms';
import { hotelContacts } from '../store';
import styles from './MainLayout.module.css';

export function MainLayout({ children }) {
  const { response, loading } = useFetch(getContactInfo);
  const setContacts = useSetRecoilState(hotelContacts);

  useEffect(() => {
    if (!loading && response) {
      setContacts(response);
    }
  }, [loading, response]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header contactData={response || {}} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {children}
          <Footer contactData={response || {}} />
        </div>
      </div>
    </>
  );
}
