/* eslint-disable require-yield */
import { persistReducer } from 'redux-persist';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getApod } from './nasaCrud';

export const actionTypes = {
  SetApod: '[SetApod] Action',
  GetApod: '[GetApod] Action',
};

const initialState = {
  apod: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SetApod: {
      const { data } = action.payload;
      return { apod: data };
    }
    default:
      return state;
  }
};

export const actions = {
  setApod: ( data ) => ({
    type: actionTypes.SetApod,
    payload: { data },
  }),
  getApod: () => ({
    type: actionTypes.GetApod,
  }),
};

export function* saga() {
  yield takeLatest(actionTypes.GetApod, function* getSaga(action) {
    const response = yield getApod();
    const { data } = response;
    yield put(actions.setApod(data));
  });
}
