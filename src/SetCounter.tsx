import React, { ChangeEvent } from 'react';
import s from './App.module.css';
import { Button } from './Button';
import { Input } from './Input';

type setCounterPropsType = {
  reset: () => void
  setValueToMonitor: () => void
  classMonitor:  string
  getNewStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  getNewMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  startValue: number
  maxValue: number
  classInputMax: string
  classInputStart: string

}

export const SetCounter = (props: setCounterPropsType) => {
  return <div className={s.all}>
    <div className={s.setMonitor}>
      <Input
        value={props.maxValue}
        classInput={props.classInputMax}
        titleInput={'max value:'}
        onInputChange={props.getNewMaxValue}/>
      <Input
        value={props.startValue}
        classInput={props.classInputStart}
        titleInput={'start value:'}
        onInputChange={props.getNewStartValue}/>

    </div>
    <div className={s.button}>
      <Button
        onButtonClick={props.setValueToMonitor}
        class={s.set}
        isDisabled={ !(props.maxValue > props.startValue && props.maxValue > 0 && props.startValue >= 0)}
        title={'set'}/>
    </div>
  </div>;
};