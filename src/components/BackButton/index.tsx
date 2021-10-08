import React from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
} from './styles';

interface BackButtonProps extends PressableProps {
  color?: string;
}

export const BackButton = ({ color, ...rest }: BackButtonProps) => {
  const theme = useTheme()

  const iconColor = color ? color : theme.colors.text

  return (
    <Container {...rest} >
      <MaterialIcons
        name={'chevron-left'}
        size={24}
        color={iconColor}
      />
    </Container>
  )
}