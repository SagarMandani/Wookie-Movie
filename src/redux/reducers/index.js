import { combineReducers } from 'redux';
import * as types from '../types';
import movie from './movieReducer';

const appReducer = combineReducers({
    movie
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState
  }
  return appReducer(state, action)
}

export default rootReducer;