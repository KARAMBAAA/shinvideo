import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { Home } from '../containers';
import { useFetch } from '../hooks';
import { getSeoData, initialFetch } from '../lib/graphcms';
import { seoData } from '../store';

function MainPage() {
  // const { loading, error } = useFetch(initialFetch);

  const [meta] = useRecoilState(seoData);

  return (
    <>
      <Head>
        <title>Библиотель</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta name="keywords" itemProp="keywords" content="Отель" />
        <meta name="description" itemProp="description" content="Контент" />
        <meta property="og:title" content={meta.ogTitle || ''} key="ogtitle" />
        <meta property="og:description" content={meta.ogDescription || ''} key="ogdesc" />
        <meta property="og:image" content={meta.ogImage.url || ''} key="ogimage" />
        <meta property="og:url" content="Контент" key="ogurl" />
        <meta property="og:site_name" content="Bibliotel" key="ogsitename" />
      </Head>
      <Home />
      <div id="galery-modal" />
    </>
  );
}

MainPage.getInitialProps = () => {
  return {};
};

export default MainPage;
