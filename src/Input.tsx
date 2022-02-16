import React, { ChangeEvent } from 'react';
import s from './App.module.css';

type InputPropsType = {
  titleInput: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  classInput: string
  value: number
}



export const Input = (props: InputPropsType) => {

  return (
    <div className={s.string}>
      <div className={s.value}>{props.titleInput}</div>
      <input
        value={props.value}
        className={props.classInput}
        type={'number'}
        onChange={props.onInputChange}
      />
    </div>
  )
}