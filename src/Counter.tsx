import React from 'react';
import styles from './App.module.css';
import { Monitor } from './Monitor';
import { Button } from './Button';
import { useSelector } from 'react-redux';
import { AppStateType } from './Redux/ReduxStore';

type CounterPropsType = {
  reset: () => void
  increaseOnOne: () => void
  count: number | string
  classMonitor: string
}

export const  Counter = (props: CounterPropsType) => {
  const setMaxValue = useSelector<AppStateType, number>(state => state.counter.setMaxValue)

   return <div className={styles.all}>
    <Monitor
      count={props.count}
      classMonitor={props.classMonitor}/>
    <div className={styles.button}>
      <Button
        onButtonClick={props.increaseOnOne}
        class={styles.increase}
        isDisabled={props.count === setMaxValue || props.count === "Enter values and press 'set'" || props.count === 'Incorrect value!'}
        title={'inc'}/>
      <Button
        onButtonClick={props.reset}
        class={styles.reset}
        isDisabled={props.count === "Enter values and press 'set'" || props.count === 'Incorrect value!'}
        title={'reset'}/>
    </div>
  </div>
}