import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  color?: string;
}

interface TitleProps {
  isLightBackground?: boolean;
}

export const Container = styled.Pressable<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color, theme }) => (color || theme.colors.main)};
  height: 56px;
  border-radius: 2px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  margin-bottom: 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme, isLightBackground }) => (isLightBackground ? theme.colors.title : theme.colors.white)};
`;
