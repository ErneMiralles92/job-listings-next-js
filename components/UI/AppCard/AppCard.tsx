import React, { ReactElement, ReactNode } from 'react';
import styles from './App.Card.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
  backgroundColor?: string;
};

export default function AppCard({ children, className, backgroundColor }: Props): ReactElement {
  return (
    <div
      className={[styles.card, className].join(' ')}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </div>
  );
}
