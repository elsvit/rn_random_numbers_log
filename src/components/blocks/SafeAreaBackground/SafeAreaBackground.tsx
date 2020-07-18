import * as React from 'react';
import {SafeAreaView, StatusBar, View, Image} from 'react-native';
import styled from 'styled-components';

export interface ISafeAreaBackground {
  bgColor?: string;
  children?: any;
}

export default function SafeAreaBackground({
  children,
  bgColor,
}: ISafeAreaBackground) {
  return (
    <Wrapper style={{backgroundColor: bgColor}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <WrapperSafe>{children}</WrapperSafe>
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  padding-top: 60px;
`;

const WrapperSafe = styled(SafeAreaView)`
  flex: 1;
`;
