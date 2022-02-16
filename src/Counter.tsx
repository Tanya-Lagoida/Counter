import React from 'react';
import s from './App.module.css';
import { Monitor } from './Monitor';
import { Button } from './Button';

type CounterPropsType = {
  reset: () => void
  increaseOnOne: () => void
  count: number | string
  classMonitor: string
  maxValue: number
  startValue: number
  isSetDisabled: boolean
}

export const  Counter = (props: CounterPropsType) => {
   return <div className={s.all}>
    <Monitor
      count={props.count}
      classMonitor={props.classMonitor}/>
    <div className={s.button}>
      <Button
        onButtonClick={props.increaseOnOne}
        class={s.increase}
        isDisabled={props.count === props.maxValue || props.isSetDisabled}
        title={'inc'}/>
      <Button
        onButtonClick={props.reset}
        class={s.reset}
        isDisabled={props.isSetDisabled}
        // isDisabled={props.maxValue > props.startValue && props.maxValue > 0 && props.startValue >= 0 ? false : true }
        title={'reset'}/>
    </div>
  </div>
}