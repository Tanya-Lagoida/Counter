import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './App.module.css';
import { Counter } from './Counter';
import { SetCounter } from './SetCounter';


function App() {
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(1);
  const [count, setCount] = useState<number | string>("Enter values and press 'set'");

  useEffect(() => {
    let startValueAsString = localStorage.getItem('startValue');
    if (startValueAsString) {
      let newValue = JSON.parse(startValueAsString);
      setStartValue(newValue);
  } }, [])

useEffect(() => {
  localStorage.setItem('startValue', JSON.stringify(startValue));
}, [startValue]);

  useEffect(() => {
    let maxValueAsString = localStorage.getItem('maxValue');
    if (maxValueAsString) {
      let newValue = JSON.parse(maxValueAsString);
      setMaxValue(newValue);
    } }, [])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [maxValue]);


  const setStringToCount = (maxValue: number, startValue: number) => {
    if (maxValue <= startValue || startValue < 0) {
      setCount('Incorrect value!');
    } else setCount("Enter values and press 'set'");
  };

  const getNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.currentTarget.valueAsNumber);
    setStringToCount(maxValue, e.currentTarget.valueAsNumber)
  };


  const getNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.valueAsNumber);
    setStringToCount(e.currentTarget.valueAsNumber, startValue)
  };

  const setValueToMonitor = () => {
    setCount(startValue);
  };

  const increaseOnOne = () => {
    if (count < maxValue) {
      setCount(count => typeof count === 'number' ? count + 1 : count);
    }
  };

  const reset = () => {
    setCount(startValue);
  };


  const getClassMonitor = () => {
    if (count === maxValue && count !== 0) {
      return s.numberMax;
    } else if (count === 'Incorrect value!') {
      return s.errorText;
    } else if (count === "Enter values and press 'set'") {
      return s.instructions;
    } else return s.number;
  };

  const classMonitor = getClassMonitor()


  const getClassInputMax = () => {
    if ( maxValue < 0 || startValue >= maxValue ) {
      return s.inputError;
    } else return s.input;
  };
  const getClassInputStart = () => {
    if (startValue < 0 || maxValue < 0 || startValue >= maxValue ) {
      return s.inputError;
    } else return s.input;
  };

  const classInputMax = getClassInputMax()
  const classInputStart = getClassInputStart()

  const isSetDisabled = count === ("Enter values and press 'set'" || 'Incorrect value!')


  return (
    <div className={s.allCounters}>
      <SetCounter
        maxValue={maxValue}
        startValue={startValue}
        reset={reset}
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
        maxValue={maxValue}
        startValue={startValue}
        isSetDisabled={isSetDisabled}
        classMonitor={classMonitor}/>
    </div>
  );
}


export default App;


