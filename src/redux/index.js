import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import rootSaga from "../redux/saga";
import rootReducer from '../redux/reducers';

let sagaMiddleware = createSagaMiddleware();

const middleware = [];
middleware.push(sagaMiddleware);

const devMode = process.env.NODE_ENV === "development";
if (devMode) {
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;