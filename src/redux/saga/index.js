import { all, fork, takeEvery } from 'redux-saga/effects';
import MovieSaga from './movieSaga';

export default function* rootSaga() {
  yield all([
    fork(MovieSaga)
  ]);
}