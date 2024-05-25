import axios from 'axios';
import { Config } from '../common';
import store from '../redux/index';
import * as types from '../redux/types';

// api calling method

const client = axios.create({
    baseURL: Config.API_BASE_URL,
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
    }
})

client.interceptors.request.use(async (config) => {
    const token = 'Wookie2019';

    const newConfig = {
        ...config,
    };

    if (token) {
        newConfig.headers = {
            ...config.headers,
            authorization: `Bearer ${token}`,
            'Content-Type': config && config.data instanceof FormData ? 'multipart/form-data' : 'application/json',
        };
    } else {
        newConfig.headers = {
            ...config.headers,
        };
    }

    // newConfig.timeout = 30000;
    newConfig.baseURL = Config.API_BASE_URL;

    return newConfig;
});

client.interceptors.response.use(
    (response) => {
        console.log('response api==', response)
        return { data: response.data, success: true };
    },
    (error) => {
        let errorMessages;
        console.log('response error==', JSON.stringify(error))
        const status = error.status || error.response.status;
        if (global.token && status == 401) {
            store.dispatch({ type: types.LOGOUT_REQUEST, payload: { jwt: global.token, refreshToken: global.refreshToken } });
        }
        if (error.response && error.response.data.errors) {
            errorMessages = error.response.data.errors;
        } else if (error.response && error.response.data?.title) {
            errorMessages = error.response.data.title;
        } else if (error.response && error.response.data?.error) {
            errorMessages = error.response.data.error;
        } else if (error.response && error.response.data?.message) {
            errorMessages = error.response.data.message;
        } else if (error.message == 'Network Error') {
            errorMessages = 'Please check your internet connection and try again.';
        } else if (error.message) {
            errorMessages = error.message;
        } else {
            errorMessages = 'Something went wrong, please try again later.';
        }
        return { message: errorMessages, success: false };
    }
);

const setAuthorization = (token) => {
    client.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearAuthorization = () => {
    delete client.defaults.headers.common.authorization;
};

export const ApiClient = { ...client, setAuthorization, clearAuthorization };

export default ApiClient;