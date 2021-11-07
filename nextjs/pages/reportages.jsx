import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import Image from 'next/image';
import styles from '../styles/reportage.module.css';

export default function Reportages({ reportages }) {
  return (
    <>
      <h2>Reportages</h2>
      {reportages.map((reportage) => (
        <div key={reportage.id}>
          <h3 className={styles.title}>{reportage.titre}</h3>
          <div className={styles.imageContainer}>
            <Image
              src={`${process.env.STRAPI_URL}${reportage.cover.url}`}
              width={reportage.cover.width}
              height={reportage.cover.height}
              className={styles.image}
              layout="fill"
            />
          </div>
          <ReactMarkdown>{reportage.description}</ReactMarkdown>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/reportages');

  return {
    props: {
      reportages: res.data,
    },
  };
}
