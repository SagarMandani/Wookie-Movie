
import * as types from '../types';

const INITIAL_STATE = {
    movieLoading: false,
    movieRefreshLoading: false,
    movieMoreLoading: false,
    movieData: [],
    moviePage: 0,
    movieMaxPage: 0,
    searchMovieLoading: false,
    searchMovieData: [],
    error: ''
};

// movie reducer
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_MOVIE_LOADING:
            return { ...state, movieLoading: action.payload };
        case types.GET_MOVIE_REFRESH_LOADING:
            return { ...state, movieRefreshLoading: action.payload };
        case types.GET_MOVIE_MORE_LOADING:
            return { ...state, movieMoreLoading: action.payload };
        case types.GET_MOVIE_SUCCESS:
            return { ...state, movieData: action.payload, moviePage: 0, movieMaxPage: action?.maxPage };
        case types.GET_MOVIE_MORE_SUCCESS:
            return { ...state, movieData: [...state.movieData, ...action.payload], moviePage: action?.currentPage };
        case types.GET_MOVIE_FAILED:
            return { ...state, error: action.payload };
        case types.SEARCH_MOVIE_LOADING:
            return { ...state, searchMovieLoading: action.payload };
        case types.SEARCH_MOVIE_SUCCESS:
            return { ...state, searchMovieData: action.payload };
        case types.SEARCH_MOVIE_FAILED:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

