import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(86)}px;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(14)}px 0;
  background-color: ${({ theme }) => theme.colors.background_one};
  margin-bottom: ${RFValue(7)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;