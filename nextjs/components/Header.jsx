import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const socials = [
  {
    key: 'linkedin',
    src: '/logo_linkedin.png',
    href: 'https://www.linkedin.com/in/camille-desmaison-fernandez-791935b6',
  },
  {
    key: 'instagram',
    src: '/logo_instagram.png',
    href: 'https://www.instagram.com/steadicam_/',
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
        <div className={styles.logoContainer}>
          <ul className={styles.socials}>
            {socials.map(({ key, src, href }) => (
              <li key={key}>
                <a href={href} target="_blank" rel="noreferrer">
                  <Image src={src} width={16} height={16} priority />
                </a>
              </li>
            ))}
          </ul>

          <Link href="/">
            <span className={styles.nameLogo}>
              CAMILLE
              <br />
              DESMAISON
              <br />
              FERNANDEZ
            </span>
          </Link>
        </div>

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
