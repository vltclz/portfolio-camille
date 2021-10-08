import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function Reportages({ reportages }) {
  return (
    <>
      <h2>Reportages</h2>
      {reportages.map((reportage) => (
        <div key={reportage.id}>
          <h3>{reportage.titre}</h3>
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
