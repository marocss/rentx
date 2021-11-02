import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInput as RNInput } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  margin-bottom: 8px;
  height: ${RFValue(49)}px;
  border-bottom-width: 2px;
  border-color: ${({ isFocused, theme }) => (isFocused ? theme.colors.main : theme.colors.background_two)};
`;

export const IconSection = styled.View`
  background-color: ${({ theme }) => theme.colors.background_two};
  width: ${RFValue(49)}px;
  margin-right: 2px;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled(RNInput)`
  flex: 1;
  padding-left: 23px;
  background-color: ${({ theme }) => theme.colors.background_two};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const TogglePasswordVisibility = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.background_two};
  width: ${RFValue(49)}px;
  justify-content: center;
  align-items: center;
`;
