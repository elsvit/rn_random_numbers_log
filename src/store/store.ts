import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import data, {DataStateT} from './data';
import common, {CommonStateT} from './common';
import sagas from './sagas';

export interface IAppState {
  data: DataStateT;
  common: CommonStateT;
}

const reducers = combineReducers<IAppState>({
  data,
  common,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagas.forEach((saga: any) => sagaMiddleware.run(saga));

export default store;
