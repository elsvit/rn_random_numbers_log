export interface IData {
  [key: string]: number;
  box1: number;
  box2: number;
  box3: number;
  // [DataKeys.box1]: number;
  // [DataKeys.box2]: number;
  // [DataKeys.box3]: number;
}

export interface IDataLog {
  dataLog: IData[];
}
