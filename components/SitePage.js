import Head from 'next/head';
import { pageComponents } from './page-components';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Script from 'next/script';
import { useState } from 'react';
export default function SitePage({ page }) {
  const [ready, setReady] = useState(false);
  const Content = pageComponents[page.key];
  return <>
    <Head>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {page.canonical && <link rel="canonical" href={page.canonical} />}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      {page.schema.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />)}
    </Head>
    <div className={page.cinematic ? 'cinematic-site' : undefined}>
      <SiteHeader />
      <Content />
      <SiteFooter />
    </div>
    <Script src="/site-interactions.js" strategy="afterInteractive" onReady={() => setReady(true)} />
    {ready && page.cinematic && <Script src="/motion.js" strategy="afterInteractive" />}
  </>;
}
