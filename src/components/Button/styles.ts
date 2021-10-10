import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PressableProps } from 'react-native';


interface ButtonProps extends PressableProps {
  color?: string;
}

export const Container = styled.Pressable<ButtonProps>`
  width: 100%;
  /* padding: 19px; */
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ color, theme }) => color ? color : theme.colors.main};
  height: 56px;
  border-radius: 2px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.shape};

`;