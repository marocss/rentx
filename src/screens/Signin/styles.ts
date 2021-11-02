import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface InputSectionProps {
  isLoginIn: boolean;
}

export const Container = styled.View`
  /* flex: 1; */
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_one};
`;

export const CancelSignInButton = styled.Pressable`
  position: absolute;
  z-index: 1;
  top: ${RFValue(44)}px;
  left: ${RFValue(11)}px;
  width: ${RFValue(43)}px;
  height: ${RFValue(43)}px;
  justify-content: center;
  align-items: center;
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

export const InputSection = styled.View<InputSectionProps>`
  width: 100%;

  ${({ isLoginIn }) => (isLoginIn ? css`
    /* margin-bottom: ${RFValue(20)}px; */
    margin-top: ${RFValue(20)}px;
  ` : css`
    margin: ${RFValue(60)}px 0px;
  `)}
`;

export const ForgotPassword = styled.Pressable`
  margin: 24px 0px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_regular};

`;

export const Footer = styled.View`
`;
