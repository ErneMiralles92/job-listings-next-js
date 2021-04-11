import React, { ReactElement, ReactNode, useRef } from 'react';
import btnStyles from './AppButton.module.css';

type Props = {
  children?: ReactNode;
  onClickHandler?: () => void;
  className: string;
};
const AppButton = (props: Props): ReactElement => {
  const btnEl = useRef(null);

  const pressedButton = () => {
    btnEl.current.blur();
    props.onClickHandler();
  };
  return (
    <button
      ref={btnEl}
      type="button"
      className={[btnStyles.button, props.className].join(' ')}
      onClick={pressedButton}
    >
      {props.children}
    </button>
  );
};

export default AppButton;
