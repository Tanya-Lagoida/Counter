import React, { ChangeEvent } from 'react';
import s from './App.module.css';
import { Button } from './Button';
import { Input } from './Input';
import { useSelector } from 'react-redux';
import { AppStateType } from './Redux/ReduxStore';

type setCounterPropsType = {
  setValueToMonitor: () => void
  classMonitor:  string
  getNewStartValue: (e: ChangeEvent<HTMLInputElement>) => void
  getNewMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
  classInputMax: string
  classInputStart: string
  count: number | string
}

export const SetCounter = (props: setCounterPropsType) => {

  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

  return <div className={s.all}>
    <div className={s.setMonitor}>
      <Input
        value={maxValue}
        classInput={props.classInputMax}
        titleInput={'max value:'}
        onInputChange={props.getNewMaxValue}/>
      <Input
        value={startValue}
        classInput={props.classInputStart}
        titleInput={'start value:'}
        onInputChange={props.getNewStartValue}/>

    </div>
    <div className={s.button}>
      <Button
        onButtonClick={props.setValueToMonitor}
        class={s.set}
        isDisabled={ !(maxValue > startValue && maxValue > 0 && startValue >= 0) || typeof props.count === 'number' }
        title={'set'}/>
    </div>
  </div>;
};