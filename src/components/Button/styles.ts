import styled from 'styled-components/native';
import { PressableProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends PressableProps {
  color?: string;
}

export const Container = styled.Pressable<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color, theme }) => color ? color : theme.colors.main};
  height: 56px;
  border-radius: 2px;
  opacity: ${({ disabled }) => disabled ? 0.3 : 1};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.white};
`;