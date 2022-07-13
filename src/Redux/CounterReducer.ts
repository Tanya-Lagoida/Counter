
export type CounterType = {
  startValue: number
  maxValue: number
  setStartValue: number
  setMaxValue: number
}

const initialState: CounterType = {
  startValue: 5,
  maxValue: 10,
  setStartValue: 5,
  setMaxValue: 10,
}

export enum ACTIONS_TYPE {
  GET_NEW_START_VALUE = 'GET-NEW-START-VALUE',
  GET_NEW_MAX_VALUE = 'GET-NEW-MAX-VALUE',
  SET_DATA = 'SET-DATA',
}

export type GetNewStartValueActionType = {
  type: 'GET-NEW-START-VALUE'
  payload: {
    startValue: number
  }
}

export type GetNewMaxValueActionType = {
  type: 'GET-NEW-MAX-VALUE'
  payload: {
    maxValue: number
  }
}

export type SetDataActionType = {
  type: 'SET-DATA'
  payload: {
    setStartValue: number,
    setMaxValue: number
  }
}

export type CurrencyReducersType =
  GetNewStartValueActionType | GetNewMaxValueActionType | SetDataActionType

export const counterReducer = (state: CounterType = initialState, action: CurrencyReducersType): CounterType => {
  switch (action.type) {

    case ACTIONS_TYPE.GET_NEW_START_VALUE:
      return {
        ...state,
        startValue: action.payload.startValue
      };
    case ACTIONS_TYPE.GET_NEW_MAX_VALUE:
      return {
        ...state,
        maxValue: action.payload.maxValue
      };

    case ACTIONS_TYPE.SET_DATA:
      return {
        ...state,
        setStartValue: action.payload.setStartValue,
        setMaxValue: action.payload.setMaxValue,
      };
    default:
      return state;
  }
};

export const getNewStartValueAC = (startValue: number): GetNewStartValueActionType => {
  return {
    type: ACTIONS_TYPE.GET_NEW_START_VALUE,
    payload: { startValue }
  };
};

export const getNewMaxValueAC = (maxValue: number): GetNewMaxValueActionType => {
  return {
    type: ACTIONS_TYPE.GET_NEW_MAX_VALUE,
    payload: { maxValue }
  };
};

export const setDataAC = (setStartValue: number, setMaxValue: number): SetDataActionType => {
  return {
    type: ACTIONS_TYPE.SET_DATA,
    payload: { setStartValue, setMaxValue }
  };
};