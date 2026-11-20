import Head from 'next/head';
import { pageComponents } from './page-components';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Script from 'next/script';
import { useState } from 'react';

export default function SitePage({ page }) {
  const [ready, setReady] = useState(false);
  const Content = pageComponents[page.key];

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {page.canonical && <link rel="canonical" href={page.canonical} />}
        {page.schema && page.schema.map((schema, index) => (
          <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
        ))}
      </Head>
      <div className={page.cinematic ? 'cinematic-site' : undefined}>
        <SiteHeader />
        {Content && <Content />}
        <SiteFooter />
      </div>
      <Script src="/site-interactions.js" strategy="afterInteractive" onReady={() => setReady(true)} />
      {ready && page.cinematic && <Script src="/motion.js" strategy="afterInteractive" />}
    </>
  );
}
