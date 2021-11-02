import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

const Input = ({ iconName }: InputProps) => {
  const theme = useTheme();

  return (
    <Container>
      {/* <IconSection> */}
      <Feather name={iconName} size={24} color={theme.colors.text_light} />
      {/* </IconSection> */}
    </Container>
  );
};

export default Input;
