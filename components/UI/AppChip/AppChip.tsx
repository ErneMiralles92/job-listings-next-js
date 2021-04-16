import React, { FC, ReactNode } from 'react';
import styles from './AppChip.module.css';
import Image from 'next/image';

type Shape = 'tile' | 'rounded';

type Props = {
  shape?: Shape;
  closable?: boolean;
  color?: string;
  textColor?: string;
  className?: string;
  children: ReactNode;
  onCloseClick?: () => void;
};

const AppChip: FC<Props> = ({
  shape = 'rounded',
  className = '',
  color = 'black',
  textColor = 'white',
  children,
  closable,
  onCloseClick,
}: Props) => {
  return shape === 'rounded' ? (
    <div
      className={[
        styles.container,
        shape === 'rounded' ? ` ${styles.rounded}` : '',
        className,
      ].join(' ')}
      style={{
        backgroundColor: color,
      }}
    >
      <div
        className={styles.content}
        style={{
          color: textColor,
        }}
      >
        <span
          style={{
            padding: '2px 0',
          }}
        >
          {children}
        </span>
      </div>
      {closable ? (
        <div
          onClick={onCloseClick}
          className={`${styles.closeArea}  ${shape === 'rounded' ? ` ${styles.rounded}` : ''}`}
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
    <div className={[styles.container, className].join(' ')}>
      <div
        className={styles.content}
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        <span
          style={{
            padding: '2px 0',
          }}
        >
          {children}
        </span>
      </div>
      {closable ? (
        <div onClick={onCloseClick} className={styles.closeArea}>
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
export default AppChip;
