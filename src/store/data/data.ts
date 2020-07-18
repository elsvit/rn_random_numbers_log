import {Reducer} from 'redux';

import {IData} from 'types/IData';

// Actions
export enum DataActions {
  DATA_GET = 'data/GET',
  DATA_SET = 'data/SET',
  DATA_LOAD = 'data/DATA_LOAD',
  DATA_LOAD_SUCCESS = 'data/DATA_LOAD_SUCCESS',
  DATA_SAVE = 'data/DATA_SAVE',
  DATA_SAVE_SUCCESS = 'data/DATA_SAVE_SUCCESS',
  DATA_DELETE_LOGS = 'data/DATA_DELETE_LOGS',
  DATA_DELETE_LOGS_SUCCESS = 'data/DATA_DELETE_LOGS_SUCCESS',
  DATA_RESET = 'data/RESET',
}

export type DataLoadableT =
  | typeof DataActions.DATA_LOAD
  | typeof DataActions.DATA_SAVE
  | typeof DataActions.DATA_DELETE_LOGS;

export interface IDataSetAction {
  type: typeof DataActions.DATA_SET;
  payload: IData;
}

export interface IDataGetAction {
  type: typeof DataActions.DATA_GET;
  payload: IData;
}

export interface IDataLoadAction {
  type: typeof DataActions.DATA_LOAD;
}

export interface IDataLoadSuccessAction {
  type: typeof DataActions.DATA_LOAD_SUCCESS;
  payload: IData[];
}

export interface IDataSaveAction {
  type: typeof DataActions.DATA_SAVE;
  payload: IData[];
}

export interface IDataSaveSuccessAction {
  type: typeof DataActions.DATA_SAVE_SUCCESS;
  payload: IData[];
}

export interface IDataDeleteLogsAction {
  type: typeof DataActions.DATA_DELETE_LOGS;
}

export interface IDataDeleteLogsSuccessAction {
  type: typeof DataActions.DATA_DELETE_LOGS_SUCCESS;
}

export interface IResetDataAction {
  type: typeof DataActions.DATA_RESET;
}

export type DataActionsT =
  | IDataSetAction
  | IDataGetAction
  | IDataLoadAction
  | IDataLoadSuccessAction
  | IDataSaveAction
  | IDataSaveSuccessAction
  | IDataDeleteLogsAction
  | IDataDeleteLogsSuccessAction
  | IResetDataAction;

export const setDataAction = (payload: IData): IDataSetAction => ({
  type: DataActions.DATA_SET,
  payload,
});

export const getDataAction = (payload: IData): IDataGetAction => ({
  type: DataActions.DATA_GET,
  payload,
});

export const dataLoadAction = (): IDataLoadAction => ({
  type: DataActions.DATA_LOAD,
});

export const dataLoadSuccessAction = (
  payload: IData[],
): IDataLoadSuccessAction => ({
  type: DataActions.DATA_LOAD_SUCCESS,
  payload,
});

export const dataSaveAction = (payload: IData[]): IDataSaveAction => ({
  type: DataActions.DATA_SAVE,
  payload,
});

export const dataSaveSuccessAction = (
  payload: IData[],
): IDataSaveSuccessAction => ({
  type: DataActions.DATA_SAVE_SUCCESS,
  payload,
});

export const dataDeleteLogsAction = (): IDataDeleteLogsAction => ({
  type: DataActions.DATA_DELETE_LOGS,
});

export const resetDataAction = (): IResetDataAction => ({
  type: DataActions.DATA_RESET,
});

//Reducer
interface IDataState {
  values: Maybe<IData>;
  log: IData[]; //!!! it is used only for download from storage !!!
}

export type DataStateT = Readonly<IDataState>;

const initialState: IDataState = {
  values: null,
  log: [],
};

const reducer: Reducer<DataStateT> = (
  state: IDataState = initialState,
  action: DataActionsT,
) => {
  switch (action.type) {
    case DataActions.DATA_SET:
      return {...state, values: action.payload};

    case DataActions.DATA_LOAD_SUCCESS:
      return {...state, log: action.payload};

    case DataActions.DATA_RESET:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
