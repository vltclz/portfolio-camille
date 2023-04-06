import React from 'react';
import axios from 'axios';
import PodcastsList from '../components/PodcastsList';

export default function Podcasts({ podcasts }) {
  return <PodcastsList podcasts={podcasts} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_PODCASTS);
  res.data.sort((a, b) => (a.id < b.id ? -1 : 1));

  return {
    props: {
      podcasts: res.data,
    },
  };
}
