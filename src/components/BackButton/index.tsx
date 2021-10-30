/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PressableProps } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
} from './styles';

interface BackButtonProps extends PressableProps {
  color?: string;
}

export const BackButton = ({ color, ...rest }: BackButtonProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleOkButton = () => {
    navigation.goBack();
  };

  const iconColor = color || theme.colors.text;

  return (
    <Container onPress={handleOkButton} {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={iconColor}
      />
    </Container>
  );
};
