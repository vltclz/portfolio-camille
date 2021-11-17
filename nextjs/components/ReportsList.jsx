import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import * as styles from './ReportsList.styles';

export default function ReportsList({ reportages }) {
  return (
    <section className={styles.container}>
      {reportages.map((reportage) => (
        <article className={styles.reportGrid} key={reportage.id}>
          <a
            href={reportage.url}
            target="_blank"
            rel="noreferrer"
            className={styles.coverContainer}
          >
            <Image
              src={`${process.env.STRAPI_URL}${reportage.cover.url}`}
              className={styles.cover}
              layout="fill"
              priority
            />
            <div className={styles.coverOverlay}>
              <Image
                src="/play_white.png"
                width={32}
                height={32}
                layout="fixed"
              />
            </div>
          </a>
          <div className={styles.logoContainer}>
            <Image
              src={`${process.env.STRAPI_URL}${reportage.logo.formats.small.url}`}
              className={styles.logo}
              layout="fill"
            />
          </div>
          <h3 className={styles.title}>
            {reportage.title}
            <small className={styles.show}>{reportage.show}</small>
          </h3>
          <div className={styles.description}>
            <span className={styles.publication}>{reportage.publication}</span>
            <ReactMarkdown>{reportage.description}</ReactMarkdown>
          </div>
        </article>
      ))}
    </section>
  );
}
