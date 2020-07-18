import {put, takeEvery} from 'redux-saga/effects';

import {IData} from 'types/IData';

import storage from 'services/storage';
import {DataActions, IDataSaveAction, dataLoadSuccessAction} from './data';
import {setLoaded, setLoading, setError, IActionTypePayload} from '../common';

export function* sagaLoadData() {
  const actionType: IActionTypePayload = {actionType: DataActions.DATA_LOAD};
  try {
    yield put(setLoading(actionType));
    const log: IData[] = yield storage.loadLog();
    yield put(dataLoadSuccessAction(log));
    yield put(setLoaded(actionType));
  } catch (error) {
    yield put(setError({...actionType, error}));
  }
}

export function* sagaSaveData({payload}: IDataSaveAction) {
  const actionType: IActionTypePayload = {actionType: DataActions.DATA_SAVE};
  try {
    yield put(setLoading(actionType));
    yield storage.addLog(payload);
    yield put(setLoaded(actionType));
  } catch (error) {
    yield put(setError({...actionType, error}));
  }
}

export function* sagaDeleteLogs() {
  const actionType: IActionTypePayload = {
    actionType: DataActions.DATA_DELETE_LOGS,
  };
  try {
    yield put(setLoading(actionType));
    yield storage.clearLog();
    yield put(setLoaded(actionType));
  } catch (error) {
    yield put(setError({...actionType, error}));
  }
}

export default function* (): Generator {
  yield takeEvery(DataActions.DATA_LOAD, sagaLoadData);
  yield takeEvery(DataActions.DATA_SET, sagaSaveData);
  yield takeEvery(DataActions.DATA_DELETE_LOGS, sagaDeleteLogs);
}
