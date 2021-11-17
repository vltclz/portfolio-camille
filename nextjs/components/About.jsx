import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import * as styles from './About.styles';

export default function About({ content, cover }) {
  return (
    <section className={styles.container}>
      <Image
        src={`${process.env.STRAPI_URL}${cover.url}`}
        width={cover.width}
        height={cover.height}
        layout="responsive"
        priority
      />
      <div className={styles.content}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </section>
  );
}
