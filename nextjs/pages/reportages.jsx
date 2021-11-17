import React from 'react';
import axios from 'axios';
import ReportsList from '../components/ReportsList';

export default function Reportages({ reportages }) {
  return <ReportsList reportages={reportages} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_REPORTAGES);

  return {
    props: {
      reportages: res.data,
    },
  };
}
