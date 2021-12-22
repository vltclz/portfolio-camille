import React from 'react';
import axios from 'axios';
import Contacts from '../components/Contacts';

export default function Contact(props) {
  return <Contacts {...props} />;
}

export async function getStaticProps() {
  const res = await axios.get(process.env.ENDPOINT_CONTACT);

  return {
    props: res.data,
  };
}
