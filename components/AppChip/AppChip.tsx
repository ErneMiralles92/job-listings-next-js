import React, { ReactElement, ReactNode } from 'react';
import styles from './AppChip.module.css';
import Image from 'next/image';

type Props = {
  shape?: string;
  closable?: boolean;
  color?: string;
  textColor?: string;
  children: ReactNode;
};

const AppChip = (props: Props): ReactElement => {
  return props.shape === 'rounded' ? (
    <div
      className={`${styles.container} ${props.shape === 'rounded' ? ` ${styles.rounded}` : ''}`}
      style={{
        backgroundColor: props.color,
      }}
    >
      <div
        className={styles.content}
        style={{
          color: props.textColor,
        }}
      >
        <span
          style={{
            padding: '2px 0',
          }}
        >
          {props.children}
        </span>
      </div>
      {props.closable ? (
        <div
          className={`${styles.closeArea}  ${
            props.shape === 'rounded' ? ` ${styles.rounded}` : ''
          }`}
        >
          <div
            style={{
              margin: 'auto',
              width: 14,
              height: 14,
            }}
          >
            <Image src="/images/icon-remove.svg" height={14} width={14} />
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          backgroundColor: props.color,
          color: props.textColor,
        }}
      >
        <span
          style={{
            padding: '2px 0',
          }}
        >
          {props.children}
        </span>
      </div>
      {props.closable ? (
        <div className={styles.closeArea}>
          <div
            style={{
              margin: 'auto',
              width: 14,
              height: 14,
            }}
          >
            <Image src="/images/icon-remove.svg" height={14} width={14} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

AppChip.defaultProps = {
  shape: 'rounded',
  closable: false,
  color: 'black',
  textColor: 'white',
};

export default AppChip;
