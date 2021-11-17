import React from 'react';
import axios from 'axios';
import About from '../components/About';

export default function Home({ content, cover }) {
  return <About content={content} cover={cover} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_ACCUEIL);

  return {
    props: res.data,
  };
}
