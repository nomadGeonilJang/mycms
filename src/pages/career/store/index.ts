import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { all } from 'redux-saga/effects';

import searchReducer from 'pages/career/store/reducer';
import searchSaga from 'pages/career/store/saga';

const rootReducer = combineReducers({
  search: searchReducer,
});

const sagaMiddleware = createSagaMiddleWare();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootReducer = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([searchSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
