/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import {
  Container, IconSection, TextInput, TogglePasswordVisibility,
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  isPassword?: boolean;
}

const Input = ({
  iconName, placeholder, keyboardType, secureTextEntry, isPassword = false,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const theme = useTheme();

  return (
    <Container>
      <IconSection>
        <Feather name={iconName} size={24} color={theme.colors.text_light} />
      </IconSection>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text_light}
        keyboardType={keyboardType}
        secureTextEntry={isPassword ? isPasswordVisible : false}
        autoCapitalize="none"
        autoCorrect={false}
      />

      { isPassword && (
        <TogglePasswordVisibility onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_light}
          />
        </TogglePasswordVisibility>
      )}

    </Container>
  );
};

export default Input;
