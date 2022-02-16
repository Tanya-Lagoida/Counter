import React, { MouseEventHandler } from 'react';

type ButtonPropsType = {
  onButtonClick: MouseEventHandler<HTMLButtonElement>
  isDisabled: boolean
  class: string
  title: string
}

export const Button = (props: ButtonPropsType) => {

  return (
    <button
      className={props.class}
      onClick={props.onButtonClick}
      disabled={props.isDisabled}>{props.title}
    </button>
  );
};

