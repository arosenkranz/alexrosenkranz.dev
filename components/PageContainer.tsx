import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';

type ILayoutProps = {
  pageTitle: string;
  description?: string;
  previewImage?: string;
  type?: string;
  children?: React.ReactNode;
};

export default function PageContainer({ pageTitle, description, previewImage, type, children }: ILayoutProps) {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 transition pointer-events-auto min-h-screen flex flex-col">
      <div className="fixed border-neutral-900 dark:border-neutral-50 transition min-w-full min-h-screen border-[12px] pointer-events-none"></div>
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

      <div className="transition min-w-full min-h-screen w-full max-w-7xl mx-auto flex flex-col p-6">
        <Header />
        <main className="px-3">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
