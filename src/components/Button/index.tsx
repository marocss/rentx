import React from 'react';
import { ActivityIndicator, PressableProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends PressableProps {
  title: string;
  color?: string;
  isLoading?: boolean;
}

export const Button = ({ title, color, isLoading, ...rest }: ButtonProps) => {
  const theme = useTheme()

  return (
    <Container {...rest} color={color}>
      { isLoading ? (
        <ActivityIndicator 
          color={theme.colors.text_light}
          size={24}
        />
      ) : (
        <Title>{title}</Title>
      ) }
    </Container>
  )
}