import React from 'react';
import * as styles from './Contacts.styles';

export default function Contacts() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.label}>Email</div>
        <a href="mailto:camdesmaison@gmail.com">camdesmaison@gmail.com</a>
      </div>
      <div className={styles.alignRight}>
        <div className={styles.label}>Téléphone</div>
        <a href="tel:+33684945088">06 84 94 50 88</a>
      </div>
    </section>
  );
}
