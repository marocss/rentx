import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: 50px;
`;

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_bold};
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${RFValue(30)}px;
`;

export const Body = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text_light};
  margin-top: ${RFPercentage(1.5)}px;
  line-height: ${RFValue(23)}px;
  text-align: center;
  margin-bottom: ${RFValue(50)}px;
`;
