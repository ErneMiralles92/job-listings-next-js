import React, { ReactElement, useEffect, useState } from 'react';
import AppCard from '../../UI/AppCard/AppCard';
import JobModel from '../job-model';
import Image from 'next/image';
import styles from './JobCard.module.css';
import AppChip from '../../UI/AppChip/AppChip';
import AppButton from '../../UI/AppButton/AppButton';

type Props = {
  job: JobModel;
};

export default function JobCard({ job }: Props): ReactElement {
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    setKeywords([job.role, job.level, ...job.languages, ...job.tools]);
  }, [job]);
  return (
    <AppCard className={[styles.card, job.featured ? styles.leftMark : ''].join(' ')}>
      <div
        className={[styles.row, styles.gutters, styles.alignCenter].join(' ')}
        style={{
          padding: 12,
        }}
      >
        <div className={styles.logo}>
          <Image src={job.logo} height={88} width={88} />
        </div>
        <div className={styles.mainInfo}>
          <div className={[styles.row, styles.gutters, styles.alignCenter].join(' ')}>
            <span
              className={styles.colMargin}
              style={{
                color: 'hsl(180, 29%, 50%)',
                fontWeight: 700,
              }}
            >
              {job.company}
            </span>
            {job.new ? (
              <AppChip color={'hsl(180, 29%, 50%)'} className={styles.colMargin}>
                NEW!
              </AppChip>
            ) : null}
            {job.featured ? <AppChip className={styles.colMargin}>FEATURED</AppChip> : null}
          </div>
          <span className={styles.jobPosition}>{job.position}</span>
          <span
            style={{
              marginTop: 8,
              color: 'hsl(180, 8%, 52%)',
            }}
          >
            {[job.postedAt, job.contract, job.location].join('   •   ')}
          </span>
        </div>
        <div className={styles.keywords}>
          <hr className={styles.divider} />
          <div className={[styles.row, styles.gutters, styles.alignCenter].join(' ')}>
            {keywords.map((keyword, index) => (
              <AppButton
                key={`${index}-keyword`}
                onClickHandler={() => console.log('clicked ', keyword)}
                className={styles.colMargin}
              >
                {keyword}
              </AppButton>
            ))}
          </div>
        </div>
      </div>
    </AppCard>
  );
}
