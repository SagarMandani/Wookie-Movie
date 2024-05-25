import * as types from '../types';

// get movie
export function requestGetMovie(obj, refreshing) {
    return { type: types.GET_MOVIE_REQUEST, payload: obj, refreshing };
}

export function getMovieLoading(value, moreLoad, refreshing) {
    return { type: refreshing ? types.GET_MOVIE_REFRESH_LOADING : moreLoad ? types.GET_MOVIE_MORE_LOADING : types.GET_MOVIE_LOADING, payload: value };
}

export const getMovieSuccess = (response) => {
    return { type: types.GET_MOVIE_SUCCESS, payload: response };
}

export const getMovieMoreSuccess = (response, currentPage) => {
    return { type: types.GET_MOVIE_MORE_SUCCESS, payload: response, currentPage };
}

export function getMovieFailed(message) {
    return { type: types.GET_MOVIE_FAILED, payload: message };
}

// search movie
export function requestSearchMovie(obj) {
    return { type: types.SEARCH_MOVIE_REQUEST, payload: obj };
}

export function searchMovieLoading(value) {
    return { type: types.SEARCH_MOVIE_LOADING, payload: value };
}

export const searchMovieSuccess = (response) => {
    return { type: types.SEARCH_MOVIE_SUCCESS, payload: response };
}

export function searchMovieFailed(message) {
    return { type: types.SEARCH_MOVIE_FAILED, payload: message };
}

