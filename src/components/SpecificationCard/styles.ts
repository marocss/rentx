import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  /* height: ${RFValue(86)}px; */
  height: 95px;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(14)}px 0;
  background-color: ${({ theme }) => theme.colors.background_one};
  margin: ${RFValue(4)}px;
  flex: 1;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;