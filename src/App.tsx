import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './App.module.css';
import { Counter } from './Counter';
import { SetCounter } from './SetCounter';
import { AppStateType } from './Redux/ReduxStore';
import { useDispatch, useSelector } from 'react-redux';
import { getNewMaxValueAC, getNewStartValueAC, setDataAC } from './Redux/CounterReducer';

function App() {

  const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

  const dispatch = useDispatch()

  const [count, setCount] = useState<number | string>("Enter values and press 'set'")

  useEffect(() => {
    let countAsString = localStorage.getItem('count');
    if (countAsString) {
      let newValue = JSON.parse(countAsString);
      setCount(newValue);
  } }, [])

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const setStringToCount = (maxValue: number, startValue: number) => {
    if (maxValue <= startValue || startValue < 0) {
      setCount('Incorrect value!');
    } else  setCount("Enter values and press 'set'");
  };

  const getNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getNewStartValueAC(e.currentTarget.valueAsNumber));
    setStringToCount(maxValue, e.currentTarget.valueAsNumber)
  };

  const getNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getNewMaxValueAC(e.currentTarget.valueAsNumber));
    setStringToCount(e.currentTarget.valueAsNumber, startValue)
  };

  const setValueToMonitor = () => {
    dispatch(setDataAC(startValue, maxValue));
    setCount(startValue)
  };

  const increaseOnOne = () => {
    if (typeof count !== 'number') return
    if (count < maxValue) setCount(count + 1)
  };

  const reset = () => {
    setCount(startValue)
  };

  const getClassMonitor = () => {
    if (count === maxValue && count !== 0) {
      return styles.numberMax;
    } else if (count === 'Incorrect value!') {
      return styles.errorText;
    } else if (count === "Enter values and press 'set'") {
      return styles.instructions;
    } else return styles.number;
  };

  const classMonitor = getClassMonitor()

  const getClassInputMax = () => {
    if ( maxValue < 0 || startValue >= maxValue ) {
      return styles.inputError;
    } else return styles.input;
  };
  const getClassInputStart = () => {
    if (startValue < 0 || maxValue < 0 || startValue >= maxValue ) {
      return styles.inputError;
    } else return styles.input;
  };

  const classInputMax = getClassInputMax()
  const classInputStart = getClassInputStart()

  return <>
    <div className={styles.allCounters}>
      <SetCounter
        count={count}
        setValueToMonitor={setValueToMonitor}
        classMonitor={classMonitor}
        classInputMax={classInputMax}
        classInputStart={classInputStart}
        getNewStartValue={getNewStartValue}
        getNewMaxValue={getNewMaxValue}/>
      <Counter
        reset={reset}
        increaseOnOne={increaseOnOne}
        count={count}
        classMonitor={classMonitor}/>
    </div>
  </>
}

export default App;