import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateSectionProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_two};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(299)}px;
  background-color: ${({ theme }) => theme.colors.header};
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: center; */

  padding-top: ${RFValue(44)}px;
  padding-left: ${RFValue(11)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary_bold};

  font-size: ${RFValue(30)}px;
  padding-left: ${RFValue(12)}px;
  margin-top: ${RFValue(21)}px;
`;

export const PeriodSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(28)}px;
  padding-left: ${RFValue(12)}px;
  padding-right: ${RFValue(21)}px;
`;

export const StartDateSection = styled.View<DateSectionProps>`
  width: 30%;
  ${({ selected, theme }) => !selected && css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
  `}
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(5)}px;
  height: ${RFValue(19)}px;
`;

export const EndDateSection = styled.View<DateSectionProps>`
  width: 30%;
  ${({ selected, theme }) => !selected && css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
  `}
`;

export const Main = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  /* background-color: orange; */
`;

export const Footer = styled.View`
  /* padding: ${RFValue(21)}px; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_two};
  padding: ${RFValue(21)}px ${RFValue(21)}px ${RFValue(10 + 21)}px;
`;