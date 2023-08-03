import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import * as nasa from './nasaRedux';
export const rootReducer = combineReducers({
  nasa: nasa.reducer,
});

export function* rootSaga() {
  yield all([
    nasa.saga(),
  ]);
}
