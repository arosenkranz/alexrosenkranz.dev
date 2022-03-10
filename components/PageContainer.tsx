import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Music from 'components/Music';

type LayoutProps = {
  pageTitle: string;
  description?: string;
  previewImage?: string;
  type?: string;
  children?: React.ReactNode;
};

export default function PageContainer({ pageTitle, description, previewImage, type, children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-light text-dark transition-all dark:bg-dark dark:text-light">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />

        {typeof window !== 'undefined' && <meta property="og:url" content={window.location.href} key="ogurl" />}
        {previewImage && <meta property="og:image" content={previewImage} key="ogimage" />}

        <meta property="og:site_name" content={'Alex Rosenkranz | Developer'} key="ogsitename" />
        <meta property="og:type" content={type || 'page'} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{pageTitle}</title>
      </Head>

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col">
        <Header />
        <main className="my-5 mb-auto py-8">{children}</main>
        <Music />
        <Footer />
      </div>
    </div>
  );
}
