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
  iconName, placeholder, keyboardType, secureTextEntry, isPassword = false, value, ...rest
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const theme = useTheme();

  return (
    <Container isFocused={isFocused}>
      <IconSection>
        <Feather
          name={iconName}
          size={24}
          color={isFocused || value ? theme.colors.main : theme.colors.text_light}
        />
      </IconSection>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text_light}
        keyboardType={keyboardType}
        secureTextEntry={isPassword ? isPasswordVisible : false}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
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
