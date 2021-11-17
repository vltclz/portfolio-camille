import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { cx } from '@emotion/css';
import * as styles from './Header.styles';

const pages = [
  {
    route: process.env.ROUTE_ACCUEIL,
    text: 'ACCUEIL',
  },
  {
    route: process.env.ROUTE_REPORTAGES,
    text: 'REPORTAGES',
  },
  {
    route: process.env.ROUTE_PHOTOS,
    text: 'PHOTOS',
  },
  {
    route: process.env.ROUTE_CONTACT,
    text: 'CONTACT',
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

  return (
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
                router.asPath === route && styles.activeNavElement,
              ])}
            >
              <Link href={route}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
