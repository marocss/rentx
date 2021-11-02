import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  /* background-color: red; */
  /* width: 100%; */
  height: ${RFValue(50)}px;
`;

export const IconSection = styled.View`
  background-color: ${({ theme }) => theme.colors.background_two};
  width: ${RFValue(50)}px;
  margin-right: 2px;
  justify-content: center;
  align-items: center;
  /* height: ${RFValue(50)}; */  
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding-left: 23px;
  background-color: ${({ theme }) => theme.colors.background_two};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.title};
  `;

export const TogglePasswordVisibility = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.background_two};
  width: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
`;
