import React, { ReactElement, ReactNode, useRef } from 'react';
import btnStyles from './AppButton.module.css';

type Props = {
  children?: ReactNode;
  onClickHandler?: () => void;
  className?: string;
  type?: string;
};
const AppButton = (props: Props): ReactElement => {
  const btnEl = useRef<HTMLButtonElement>(null);

  const pressedButton = () => {
    btnEl?.current?.blur();
    if (props.onClickHandler) props.onClickHandler();
  };
  return (
    <button
      ref={btnEl}
      type="button"
      className={[
        btnStyles.button,
        props.className,
        props.type === 'text' ? btnStyles.text : '',
      ].join(' ')}
      onClick={pressedButton}
    >
      {props.children}
    </button>
  );
};

AppButton.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClickHandler: function () {},
};
export default AppButton;
