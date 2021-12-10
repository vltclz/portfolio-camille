import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import * as styles from './About.styles';
import { photoUrl } from '../utils/images';

export default function About({ content, cover }) {
  return (
    <section className={styles.container}>
      <Image
        src={photoUrl(cover)}
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
