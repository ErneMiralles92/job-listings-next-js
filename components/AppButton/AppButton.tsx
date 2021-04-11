import React, { ReactElement, ReactNode } from 'react';
import btnStyles from './AppButton.module.css';

type Props = {
  children?: ReactNode;
  onClickHandler?: () => void;
};
const AppButton = (props: Props): ReactElement => {
  return (
    <button type="button" className={btnStyles.button} onClick={props.onClickHandler}>
      {props.children}
    </button>
  );
};

export default AppButton;
