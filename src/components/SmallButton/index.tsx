import React from 'react';
import { PressableProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface SmallButtonProps extends PressableProps {
  text: string;
}

export const SmallButton = ({ text, ...rest }: SmallButtonProps) => {

  return (
    <Container {...rest} >
      <Title>{text}</Title>
    </Container>
  )
}