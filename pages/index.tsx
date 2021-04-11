import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ReactElement } from 'react';
import JobCard from '../components/Jobs/JobCard/JobCard';
import jobsList from '../data.json';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Dev Jobs List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div style={{ marginBottom: 64, width: '100%' }}></div>
            {jobsList.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    </div>
  );
}
