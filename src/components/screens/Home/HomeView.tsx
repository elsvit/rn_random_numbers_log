import * as React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styled from 'styled-components';

import STYLES from 'constants/styles';
import {Button} from 'ui';
import {SafeAreaBackground, LogModal} from 'components/blocks';

interface IHomeViewPops {
  values: number[];
  onGeneratePress: () => void;
  onShowLogPress: () => void;
  onClearLogsPress: () => void;
  isLogModalOpen: boolean;
  closeLogModal: () => void;
  btnDisabled: boolean;
}

const HomeView = ({
  values = [1, 2, 3],
  onGeneratePress,
  onShowLogPress,
  onClearLogsPress,
  isLogModalOpen,
  closeLogModal,
  btnDisabled,
}: IHomeViewPops) => {
  return (
    <SafeAreaBackground bgColor={STYLES.color.paleGrey}>
      <WrapperScrollable
        contentContainerStyle={{
          alignItems: 'flex-start',
          paddingHorizontal: 20,
          paddingTop: 4,
          minHeight: 200,
          paddingBottom: 20,
        }}>
        <BoxesWrapper>
          {values.map((val: number, idx: number) => (
            <BoxView key={idx}>
              <BoxText>{val}</BoxText>
            </BoxView>
          ))}
        </BoxesWrapper>
        <ButtonsContainer>
          <Button
            label="Generate"
            onPress={onGeneratePress}
            disabled={btnDisabled}
          />
          <BottomBtnWrapper>
            <Button label="Show Log" onPress={onShowLogPress} />
          </BottomBtnWrapper>
          <BottomBtnWrapper>
            <Button label="Clear Log" onPress={onClearLogsPress} />
          </BottomBtnWrapper>
        </ButtonsContainer>
      </WrapperScrollable>
      { isLogModalOpen && <LogModal isVisible={isLogModalOpen} onClose={closeLogModal} />}
    </SafeAreaBackground>
  );
};

const WrapperScrollable = styled(ScrollView)`
  flex: 1;
`;

const BoxesWrapper = styled(View)`
  flex: 1;
  width: 100%;
  height: 150px;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const BoxView = styled(View)`
  flex: 1;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${STYLES.color.paleGrey};
  margin: 16px;
`;

const BoxText = styled(Text)`
  text-align: center;
  font-size: ${STYLES.fontSize.xlarge}px;
`;

const ButtonsContainer = styled(View)`
  width: 100%;
  padding: 0 15%;
  align-items: center;
  margin-top: 0;
`;

const BottomBtnWrapper = styled(View)`
  margin-top: 17px;
`;

export default HomeView;
