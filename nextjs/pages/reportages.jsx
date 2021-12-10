import React from 'react';
import axios from 'axios';
import ReportsList from '../components/ReportsList';

export default function Reportages({ reportages }) {
  return <ReportsList reportages={reportages} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_REPORTAGES);
  res.data.sort((a, b) => {
    if (
      new Date(
        a.publication.split('-')[0],
        a.publication.split('-')[1] - 1,
        a.publication.split('-')[2]
      ) >
      new Date(
        b.publication.split('-')[0],
        b.publication.split('-')[1] - 1,
        b.publication.split('-')[2]
      )
    ) {
      return -1;
    }
    return 1;
  });

  return {
    props: {
      reportages: res.data,
    },
  };
}
