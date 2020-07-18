import * as React from 'react';
import {
  View,
  FlatList, // in case of long list
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import {IData} from 'types/IData';
import STYLES from 'constants/styles';
import {dataLoadAction} from 'store/data';
import {IAppState} from 'store';

export interface ILogModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LogModal({isVisible, onClose}: ILogModalProps) {
  const dispatch = useDispatch();
  // const [logs, setLogs] = React.useState<IData[]>(null)

  const logs = useSelector((state: IAppState) => state.data.log);

  React.useEffect(() => {
    dispatch(dataLoadAction());
  }, [isVisible]);

  const renderRow = ({item}: {item: IData}) => (
    <LogRowWrapper>
      {Object.keys(item).map((key: string) => (
        <LogWrapper key={key}>
          <LogText>{item[key]}</LogText>
        </LogWrapper>
      ))}
    </LogRowWrapper>
  );

  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <TitleWrapper>
          <Title>Log</Title>
        </TitleWrapper>
        <ListWrapper>
          {!isEmpty(logs) ? (
            <FlatList
              data={logs}
              renderItem={renderRow}
              keyExtractor={(item, idx) => String(idx)}
            />
          ) : (
            <Title>Logs are empty</Title>
          )}
        </ListWrapper>

        <CloseWrapper onPress={onClose}>
          <CloseText>Close</CloseText>
        </CloseWrapper>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  width: 100%;
  padding: 64px 32px;
  background-color: ${STYLES.color.white};
`;

const TitleWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled(Text)`
  width: 100%;
  font-style: normal;
  font-size: ${STYLES.fontSize.largge}px;
  line-height: ${STYLES.fontSize.largge * 1.4}px;
  text-align: center;
`;

const ListWrapper = styled(View)`
  flex: 1;
  width: 100%;
`;

const LogRowWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogText = styled(Text)`
  text-align: center;
  font-size: ${STYLES.fontSize.xlarge}px;
`;

const CloseWrapper = styled(TouchableOpacity)`
  flex: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 90px
  height: 40px
  justify-content: center;
  align-items: center;
`;

const CloseText = styled(Text)`
  text-align: center;
  color: ${STYLES.color.steel};
  font-size: ${STYLES.fontSize.small}px;
`;
