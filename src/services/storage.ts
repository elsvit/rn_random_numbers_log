import AsyncStorage from '@react-native-community/async-storage';

import {IData} from 'types/IData';

const PREFIX = '@pickr';

async function removeData(key: string) {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem(key);
      resolve();
    } catch (error) {
      reject(new Error('Error! Cannot remove data on this device!'));
    }
  });
}

async function setData(key: string, data: any) {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      resolve();
    } catch (error) {
      reject(new Error('Error! Cannot save data on this device!'));
    }
  });
}

async function mergeArrData(key: string, dataToMerge: any) {
  return new Promise(async (resolve, reject) => {
    const dataJSON = await AsyncStorage.getItem(key);
    let data = [dataToMerge];

    if (dataJSON !== null) {
      try {
        data = JSON.parse(dataJSON);
        data = [...data, dataToMerge];
      } catch (ex) {
        data = [dataToMerge];
      }
    }

    try {
      const modifiedData = JSON.stringify(data);
      await AsyncStorage.setItem(key, modifiedData);
      resolve();
    } catch (ex) {
      reject(new Error('Error! Cannot save data on this device!'));
    }
  });
}

async function getData(key: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataStr = await AsyncStorage.getItem(key);

      if (dataStr != null) {
        try {
          const data = JSON.parse(dataStr);
          resolve(data);
        } catch (e) {
          resolve(dataStr);
        }
      } else {
        resolve('');
      }
    } catch (error) {
      reject(new Error('Error! Cannot get data on this device!'));
    }
  });
}

class AsyncStorageService {
  /**
   * Set user auth token to the AsyncStorage
   * @param {*} token -
   * @returns {Promise}
   */
  public addLog = async (data: IData[]) => {
    return mergeArrData(`${PREFIX}:log`, data);
  };

  loadLog = async () => getData(`${PREFIX}:log`);

  public clearLog = async () => removeData(`${PREFIX}:log`);
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;
