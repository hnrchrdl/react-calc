import { createStore, combineReducers } from 'redux';
import calcReducer from './calculator';

export default createStore(combineReducers({ calculator: calcReducer }));
