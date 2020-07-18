import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';
import styled from 'styled-components';
import STYLES from 'constants/styles';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  color?: string;
  bgColor?: string;
  hasBorder?: boolean;
  image?: ImageSourcePropType;
  onPress: () => void;
  rotate?: number | boolean;
  disabled?: boolean;
}

export default function Button({
  label,
  color = STYLES.color.steel,
  bgColor = 'transparent',
  hasBorder = true,
  onPress,
  image,
  rotate,
  style,
  disabled,
  ...props
}: IButtonProps) {
  const borderColor = hasBorder ? color : 'transparent';
  let rotateStyle = null;
  if (rotate) {
    if (rotate === true) {
      rotateStyle = {transform: [{rotate: '-90deg'}]};
    } else {
      rotateStyle = {transform: [{rotate: `${rotate}deg`}]};
    }
  }
  return (
    <TouchableOpacityStyled
      onPress={onPress}
      activeOpacity={0.5}
      {...props}
      style={[
        style,
        {borderColor, backgroundColor: 'transparent'},
        rotateStyle,
      ]}
      disabled={disabled}>
      <Label style={{color, opacity: disabled ? 0.3 : 1}}>{label}</Label>
      {image && <IconImage source={image} resizeMode="contain" />}
    </TouchableOpacityStyled>
  );
}

const TouchableOpacityStyled = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  height: ${STYLES.size.btnHeight}px;
  max-height: ${STYLES.size.btnHeight}px;
  overflow: hidden;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-width: 2px;
`;

const Label = styled(Text)`
  width: 100%;
  font-style: normal;
  font-size: ${STYLES.fontSize.largge}px;
  line-height: ${STYLES.fontSize.largge * 1.4}px;
  text-align: center;
`;

const IconImage = styled(Image)`
  width: 20px;
  height: 20px;
`;
