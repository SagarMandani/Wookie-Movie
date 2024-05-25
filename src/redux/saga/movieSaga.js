import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';
import * as movieAction from '../actions/movieAction';
import { getMovie, searchMovie } from '../../apiServices';
import * as types from '../types';
import { Utils } from '../../common';

function* getMovieRequest(action) {
    const { payload, pagination, currentPage, refreshing } = action;
    try {
        yield put(movieAction.getMovieLoading(true, pagination, refreshing ? true : false));
        const response = yield call(getMovie, payload);
        yield put(movieAction.getMovieLoading(false, pagination, refreshing ? true : false));
        const { success, message, data } = response;
        if (success) {
            if (pagination) {
                yield put(movieAction.getMovieMoreSuccess(data?.movies, currentPage));
            } else {
                // let maxPage = Math.ceil(data?.totalCount / data?.pageSize);
                // maxPage = maxPage > 0 ? maxPage - 1 : maxPage;
                yield put(movieAction.getMovieSuccess(data?.movies, 0));
            }
        } else {
            yield put(movieAction.getMovieFailed(message));
            Utils.alertDialog(Utils.handleErrMsg(response), () => { })
        }
    } catch (error) {
        yield put(movieAction.getMovieLoading(false, pagination, refreshing ? true : false));
        yield put(movieAction.getMovieFailed(error));
    }
}

function* searchMovieRequest(action) {
    const { payload } = action;
    try {
        yield put(movieAction.searchMovieLoading(true));
        const response = yield call(searchMovie, payload);
        yield put(movieAction.searchMovieLoading(false));
        const { success, message, data } = response;
        if (success) {
            yield put(movieAction.searchMovieSuccess(data?.movies));
        } else {
            yield put(movieAction.searchMovieFailed(message));
            Utils.alertDialog(Utils.handleErrMsg(response), () => { })
        }
    } catch (error) {
        yield put(movieAction.searchMovieLoading(false));
        yield put(movieAction.searchMovieFailed(error));
    }
}

export default function* () {
    yield takeEvery(types.GET_MOVIE_REQUEST, getMovieRequest),
    yield takeEvery(types.SEARCH_MOVIE_REQUEST, searchMovieRequest)
}