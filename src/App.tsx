import React, { useState } from 'react';
import s from './App.module.css';
import { Monitor } from './Monitor';
import { Button } from './Button';

function App() {
  const [count, setCount] = useState(0);

  const increaseOnOne = () => {
    if (count < 5) {
      setCount((count: number) => {
        return count + 1;
      });
    }
  };

  const reset = () => {
    if (count > 0) {
      setCount(() => {
        return 0;
      });
    }
  };

  const classMonitor = () => {
    if (count === 5) {
      return s.monitorMax;
    } else return s.monitor;
  };

  return (
    <div className={s.all}>
      <Monitor count={count} classMonitor={classMonitor()}/>
      <div className={s.button}>
        <Button count={count} setCount={increaseOnOne} onButtonClick={increaseOnOne}
                class={s.increase} isDisabled={count === 5} title={'inc'}/>
        <Button count={count} setCount={reset} onButtonClick={reset} class={s.reset}
                isDisabled={count === 0} title={'reset'}/>
      </div>
    </div>
  );
}


export default App;
