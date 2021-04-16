import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes, useRef } from 'react';
import btnStyles from './AppButton.module.css';

type BtnVariant = 'text' | undefined;
type Props = {
  onClick?: () => void;
  className?: string;
  variant?: BtnVariant;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const AppButton: FC<Props> = ({
  variant,
  className = '',
  children,
  onClick,
  ...restArgs
}: Props) => {
  const btnEl = useRef<HTMLButtonElement>(null);

  const pressedButton = () => {
    btnEl?.current?.blur();
    if (onClick) onClick();
  };
  return (
    <button
      ref={btnEl}
      className={[btnStyles.button, className, variant === 'text' ? btnStyles.text : ''].join(' ')}
      onClick={pressedButton}
      {...restArgs}
    >
      {children}
    </button>
  );
};

export default AppButton;
