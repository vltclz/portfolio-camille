import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import * as styles from './ReportsList.styles';
import { photoUrl } from '../utils/images';

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
              src={photoUrl(reportage.cover, 'medium')}
              className={styles.cover}
              layout="fill"
              priority
            />
            <div className={styles.coverOverlay}>
              <Image
                src="/play_white.svg"
                width={48}
                height={48}
                layout="fixed"
              />
            </div>
          </a>
          <div className={styles.logoContainer}>
            <Image
              src={photoUrl(reportage.logo, 'small')}
              className={styles.logo}
              layout="fill"
              priority
            />
          </div>
          <h3 className={styles.title}>
            {reportage.title}
            <small className={styles.show}>{reportage.show}</small>
          </h3>
          <div className={styles.description}>
            <span className={styles.publication}>
              {reportage.publication.split('-')[2]}/
              {reportage.publication.split('-')[1]}/
              {reportage.publication.split('-')[0]}
            </span>
            <ReactMarkdown>{reportage.description}</ReactMarkdown>
          </div>
        </article>
      ))}
    </section>
  );
}
