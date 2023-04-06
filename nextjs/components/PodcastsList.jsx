import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import * as styles from './PodcastsList.styles';
import { photoUrl } from '../utils/images';

const possibleLinks = ['spotify', 'applepodcast', 'deezer', 'instagram'];

export default function PodcastsList({ podcasts }) {
  return (
    <section className={styles.container}>
      {podcasts.map((podcast, index) => (
        <>
          <article key={podcast.id} className={styles.podcast}>
            <h2 className={styles.title}>{podcast.title}</h2>
            <div className={styles.coverContainer}>
              <Image
                src={photoUrl(podcast.cover, 'medium')}
                className={styles.cover}
                layout="fill"
                priority
              />
            </div>
            <div className={styles.linksStrip}>
              {possibleLinks.map((linkKey) => {
                if (podcast[`${linkKey}_url`]) {
                  return (
                    <a
                      href={podcast[`${linkKey}_url`]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={`/logo_${linkKey}.png`}
                        title={linkKey}
                        width={25}
                        height={25}
                      />
                    </a>
                  );
                }
                return null;
              })}
            </div>
            <ReactMarkdown className={styles.description}>
              {podcast.description}
            </ReactMarkdown>
          </article>
          {index !== podcasts.length - 1 && <hr className={styles.hr} />}
        </>
      ))}
    </section>
  );
}
