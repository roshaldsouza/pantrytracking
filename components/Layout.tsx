import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';
import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pantry Tracking App</title>
        <meta name="description" content="Track your pantry items efficiently" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header className={styles.header}>
        <h1 className={styles.heading}>Pantry Tracking App</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
};

export default Layout;
