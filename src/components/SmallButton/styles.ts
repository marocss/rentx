import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Pressable`
  width: ${RFValue(71)}px;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.white};
`;