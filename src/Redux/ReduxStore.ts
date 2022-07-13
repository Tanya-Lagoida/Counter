import { combineReducers } from 'redux';
import { counterReducer } from './CounterReducer';
import { legacy_createStore as createStore} from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer
})

let preloadedState;
const persistedString = localStorage.getItem('app-state')
if (persistedString) {
  preloadedState = JSON.parse(persistedString)
}

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
  localStorage.setItem('app-state', JSON.stringify(store.getState()))
  localStorage.setItem('value', JSON.stringify(store.getState().counter))
})