import * as React from 'react';
import isEmpty from 'lodash/isEmpty';
import {useSelector, useDispatch} from 'react-redux';

import {setDataAction, dataDeleteLogsAction, DataActions} from 'store/data';
import {generateBoxes} from 'services/utils';
import {IAppState} from 'store';
import {IData} from 'types/IData';

import HomeView from './HomeView';

const Home = () => {
  const dispatch = useDispatch();

  const [isLogModalOpen, setLogModalOpen] = React.useState<boolean>(false);

  const storeData = useSelector((state: IAppState) => state.data.values);
  const loading = useSelector((state: IAppState) => state.common.loading);
  const btnDisabled = !!loading[DataActions.DATA_SAVE];
  const values = storeData ? Object.values(storeData) : [] || [];

  React.useEffect(() => {
    if (isEmpty(values)) {
      const data: IData = generateBoxes();

      dispatch(setDataAction(data));
    }
  }, []);

  const onGeneratePress = () => {
    const data: IData = generateBoxes();
    dispatch(setDataAction(data));
  };

  const onClearLogsPress = () => {
    dispatch(dataDeleteLogsAction());
  };

  const onShowLogPress = () => {
    setLogModalOpen(true);
  };

  const closeLogModal = () => {
    setLogModalOpen(false);
  };

  return (
    <HomeView
      values={values}
      onGeneratePress={onGeneratePress}
      onShowLogPress={onShowLogPress}
      onClearLogsPress={onClearLogsPress}
      isLogModalOpen={isLogModalOpen}
      closeLogModal={closeLogModal}
      btnDisabled={btnDisabled}
    />
  );
};

export default Home;
