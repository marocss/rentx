import { View, Text, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface OptionsProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_one};
`;

export const Header = styled.View`
  width: 100%;
  /* flex: 2; */
  height: 227px;
  padding: 50px 12px;
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  padding-right: 13px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoutButton = styled.Pressable`
`;

export const AvatarContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`;

export const AddAvatarButton = styled.Pressable`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 4px;
  right: 4px;
`;

export const Main = styled.View`
  flex: 1;
  /* flex: 6; */
  margin-top: 122px;
  padding: 0px 24px;
  /* background-color: orange; */
`;

export const Menu = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex-direction: row;
  justify-content: center;
`;

export const Option = styled(Pressable)<OptionsProps>`
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, active }) => (active ? theme.colors.main : 'transparent')};
  padding-bottom: 14px;
`;

export const OptionTitle = styled(Text)<OptionsProps>`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme, active }) => (active ? theme.fonts.secondary_bold : theme.fonts.secondary_regular)};
  color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.text_light)};
`;
