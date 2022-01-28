import React, { MouseEventHandler } from 'react';

type F = (num: number) => number

type ButtonPropsType = {
  count: number
  setCount: (count: number | F) => void
  onButtonClick: MouseEventHandler<HTMLButtonElement>
  isDisabled: boolean
  class: string
  title: string
}

export const Button = (props: ButtonPropsType) => {

  return (
    <button className={props.class} onClick={props.onButtonClick}
            disabled={props.isDisabled}>{props.title}
    </button>
  );
};
