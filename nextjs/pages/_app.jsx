import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import PageAnimationLayout from '../components/PageAnimationLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <PageAnimationLayout>
        <Component {...pageProps} />
      </PageAnimationLayout>
      <Footer />
    </>
  );
}

export default MyApp;
