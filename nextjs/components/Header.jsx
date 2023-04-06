import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { cx } from '@emotion/css';
import * as styles from './Header.styles';

const pages = [
  {
    route: '/',
    text: 'ACCUEIL',
    title: 'Camille Desmaison Fernandez',
  },
  {
    route: '/reportages',
    text: 'REPORTAGES',
    title: 'Reportages',
  },
  {
    route: '/podcasts',
    text: 'PODCASTS',
    title: 'Podcasts',
  },
  {
    route: '/photos',
    text: 'PHOTOS',
    title: 'Photos',
  },
  {
    route: '/contact',
    text: 'CONTACT',
    title: 'Contact',
  },
];

export default function Header() {
  const router = useRouter();
  const currentPage = pages.find(({ route }) => route === router.route);

  return (
    <>
      <Head>
        <title>{currentPage?.title}</title>
      </Head>
      <header className={styles.container}>
        <Link href="/">
          <span className={styles.nameLogo}>
            CAMILLE
            <br />
            DESMAISON
            <br />
            FERNANDEZ
          </span>
        </Link>

        <nav>
          <ul className={styles.navList}>
            {pages.map(({ route, text }) => (
              <li
                key={`navLink-${text}`}
                className={cx([
                  styles.navElement,
                  router.route === route && styles.activeNavElement,
                ])}
              >
                <Link href={route}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
