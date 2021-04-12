import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ReactElement, useEffect, useReducer, useState } from 'react';
import JobCard from '../components/Jobs/JobCard/JobCard';
import FilterCard from '../components/FilterCard/FilterCard';
import jobsData from '../data.json';
import JobContext from '../context/jobs-context';
import JobModel from '../components/Jobs/job-model';

type Action =
  | { type: 'add'; filter: string }
  | { type: 'delete'; filter: string }
  | { type: 'deleteAll' };

const reducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case 'add':
      if (!state.includes(action.filter)) return [...state, action.filter];
      return state;
    case 'delete':
      return state.filter((el: string): boolean => el !== action.filter);
    case 'deleteAll':
      return [];
    default:
      throw new Error();
  }
};

export default function Home(): ReactElement {
  const [filters, dispatchFilter] = useReducer(reducer, []);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const addFilter = (filter: string) => {
    dispatchFilter({ type: 'add', filter });
  };

  const removeFilter = (filter: string) => {
    dispatchFilter({ type: 'delete', filter });
  };

  const removeAll = () => {
    dispatchFilter({ type: 'deleteAll' });
  };
  useEffect(() => {
    if (filters.length === 0) {
      setJobs(jobsData);
    } else {
      setJobs(
        jobsData.filter((job) => {
          const keywords = [job.role, job.level, ...job.languages, ...job.tools];
          return filters.every((filter) => keywords.includes(filter));
        })
      );
    }
  }, [filters]);
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
            <JobContext.Provider
              value={{
                filters: filters,
                addFilter: addFilter,
                removeFilter: removeFilter,
                removeAll: removeAll,
              }}
            >
              {filters.length > 0 ? <FilterCard /> : null}
              <div style={{ marginBottom: 48, width: '100%' }}></div>
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </JobContext.Provider>
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
