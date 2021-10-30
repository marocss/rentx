import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_one};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(135)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(22)}px;
  margin-top: 16px;
`;

export const Footer = styled.View`
`;
