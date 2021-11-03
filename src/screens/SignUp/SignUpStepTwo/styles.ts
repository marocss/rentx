import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 12px;
  background-color: ${({ theme }) => theme.colors.background_one};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(46)}px;
`;

export const BulletIndicatorSection = styled.View`
  flex-direction: row;
  margin-right: 20px;
`;

export const Main = styled.View`
  padding: 0 12px;
`;

export const MainHeader = styled.View`
  margin-top: ${RFValue(45)}px;
`;

export const Title = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(36)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.title_dark};
`;

export const Subtitle = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 16px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const FormTitle = styled.Text`
  margin-left: 8px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.title_dark};
`;

export const InputSection = styled.View`
  margin-top: 24px;
  margin-bottom: 16px;
`;
