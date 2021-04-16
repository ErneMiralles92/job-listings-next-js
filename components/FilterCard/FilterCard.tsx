import React, { ReactElement } from 'react';
import { useJobsContext } from '../../context/jobs-context';
import AppCard from '../UI/AppCard/AppCard';
import AppChip from '../UI/AppChip/AppChip';
import AppButton from '../UI/AppButton/AppButton';
import styles from './FilterCard.module.css';

const FilterCard = (): ReactElement => {
  const context = useJobsContext();
  return (
    <AppCard className={styles.card} backgroundColor={'white'}>
      <div
        className="row no-wrap gutters alignCenter"
        style={{
          padding: '0 12px',
        }}
      >
        <div className={styles.flexItem}>
          <div className="row">
            {context.filters.map((filter, index) => (
              <AppChip
                key={`${index}`}
                shape={'tile'}
                closable={true}
                color={'hsl(180, 31%, 95%)'}
                textColor={'hsl(180, 29%, 50%)'}
                className="colMargin"
                onCloseClicked={() => context.removeFilter(filter)}
              >
                {filter}
              </AppChip>
            ))}
          </div>
        </div>
        <div className={styles.rawItem}>
          <div className={['row', 'justifyEnd'].join(' ')}>
            <AppButton onClick={context.removeAll} variant={'text'}>
              Clear
            </AppButton>
          </div>
        </div>
      </div>
    </AppCard>
  );
};

export default FilterCard;
