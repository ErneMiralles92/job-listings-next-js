import React, { ReactElement, ReactNode } from 'react';
import styles from './App.Card.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
};

export default function AppCard({ children, className }: Props): ReactElement {
  return <div className={[styles.card, className].join(' ')}>{children}</div>;
}
