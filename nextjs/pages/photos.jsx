import React from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery';

export default function Photos({ photos }) {
  return <Gallery photos={photos} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_PHOTOS);
  res.data.sort((a, b) => (a.id > b.id ? -1 : 1));

  return {
    props: {
      photos: res.data,
    },
  };
}
