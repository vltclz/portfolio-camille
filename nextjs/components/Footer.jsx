import React from 'react';
import * as styles from './Footer.styles';

export default function Footer() {
  return (
    <footer>
      <ul className={styles.list}>
        <li>
          built by{' '}
          <a
            href="https://www.linkedin.com/in/valentin-cluzeau-47b441a4/"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            @vltclz
          </a>
        </li>
        <li>© Copyright {new Date().getFullYear()}</li>
      </ul>
    </footer>
  );
}
