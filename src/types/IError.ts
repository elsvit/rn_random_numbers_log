export interface IError {
  code: string;
  message: string;
}

export interface IErrors {
  [key: string]: Maybe<IError>;
}
