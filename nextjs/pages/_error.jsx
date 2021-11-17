import React from 'react';

export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}

export async function getInitialProps({ res, err }) {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
}
