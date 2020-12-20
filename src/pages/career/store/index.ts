import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { all } from 'redux-saga/effects';

import searchReducer from 'pages/career/store/reducers/searchReducer';
import userReducer from 'pages/career/store/reducers/userReducer';
import searchSaga from 'pages/career/store/sagas/searchSaga';
import userSaga from 'pages/career/store/sagas/userSaga';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootReducer = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([searchSaga(), userSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
