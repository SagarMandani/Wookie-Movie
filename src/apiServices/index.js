import ApiClient from "./apiClient";
import api from "./apiEndpoint";

const getMovie = (search) => ApiClient.get(api.GET_MOVIE);
const searchMovie = (search) => ApiClient.get(`${api.GET_MOVIE}?q=${search}`);

export {
    getMovie, searchMovie
};