import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from '../../lib/ThemeProvider';

import Header from '../Header';
import Footer from '../Footer';

import styles from './layout.module.scss';

const Layout = ({ pageTitle, description, previewImage, children, ...props }) => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />

        {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} key="ogurl" />}
        {previewImage && <meta property="og:image" content={previewImage} key="ogimage" />}
        <meta property="og:site_name" content={'Alex Rosenkranz | Developer'} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${styles['page__layout']} ${
          theme === 'LIGHT' ? styles['page__layout--light'] : styles['page__layout--dark']
        }`}
      >
        <Header />
        <main className={styles['page__main-content']}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
