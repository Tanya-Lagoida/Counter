import React from 'react';
import s from './App.module.css';

type MonitorPropsType = {
  count: number
  classMonitor: string
}

export const Monitor = (props: MonitorPropsType) => {
  return (
    <div className={s.monitor}>
      <div className={props.classMonitor}>{props.count}
      </div>
    </div>
  );
};
