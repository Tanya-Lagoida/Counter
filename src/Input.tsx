import React, { ChangeEvent } from 'react';
import styles from './App.module.css';

type InputPropsType = {
  titleInput: string
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  classInput: string
  value: number
}

export const Input = (props: InputPropsType) => {

  return (
    <div className={styles.string}>
      <div className={styles.value}>{props.titleInput}</div>
      <input
        value={props.value}
        className={props.classInput}
        type={'number'}
        onChange={props.onInputChange}
      />
    </div>
  )
}