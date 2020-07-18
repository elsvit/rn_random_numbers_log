type Maybe<T> = T | null | undefined;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

interface IBoolDict {
  [key: string]: Maybe<boolean>;
}

interface IStringDict {
  [key: string]: Maybe<string>;
}

interface IDict {
  [key: string]: Maybe<number | string | boolean>;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
