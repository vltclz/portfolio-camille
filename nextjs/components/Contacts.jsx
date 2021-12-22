import React from 'react';
import * as styles from './Contacts.styles';

export default function Contacts({ email, phone, linkedin }) {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.label}>Email</div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <div className={styles.label}>Téléphone</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div>
        <div className={styles.label}>LinkedIn</div>
        <a href={linkedin} target="_blank" rel="noreferrer">
          Camille Desmaison--Fernandez
        </a>
      </div>
    </section>
  );
}
