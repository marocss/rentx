import React from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface BackButtonProps extends PressableProps {
  color?: string;
}

export const BackButton = ({ color, ...rest }: BackButtonProps) => {
  const theme = useTheme()
  const navigation = useNavigation()

  const handleOkButton = () => {
    navigation.goBack()
  }

  const iconColor = color ? color : theme.colors.text

  return (
    <Container onPress={handleOkButton} {...rest} >
      <MaterialIcons
        name={'chevron-left'}
        size={24}
        color={iconColor}
      />
    </Container>
  )
}