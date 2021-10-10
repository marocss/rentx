import React from 'react';
import { PressableProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends PressableProps {
  title: string;
  color?: string;
}

export const Button = ({
  title,
  color,
  ...rest
}: ButtonProps) => {

  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  )
}