import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <>
      <h1>Portfolio Camille</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/reportages">Reportages</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
