import {IData} from 'types/IData';

export const getRndInt = (num: number) => Math.floor(Math.random() * num);

export const generateBoxes = (): IData => {
  const data = {
    box1: getRndInt(100),
    box2: getRndInt(100),
    box3: getRndInt(100),
  };
  return data;
};
