import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'ROI focused approach to build your business',
  author = 'Growthead 2022',
  meta,
  title = 'Growthead landing page',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-1/126262202_116803043584168_1169309742283486700_n.png?stp=dst-png_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=1SOCzfXkyNQAX-fxZBG&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT9AVyyMtS3zC3efGA87sxk3BuH-7cECEeyf16SIkikhZw&oe=62F6995B"/>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};
