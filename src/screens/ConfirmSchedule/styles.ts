import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_two};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${RFValue(44)}px;
  margin-left: ${RFValue(11)}px;
`;

export const CarouselSection = styled.View`
  margin-top: -${RFValue(22)}px;
  z-index: -1;
`;

export const Main = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 14,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})`
 
`;

export const FirstSection = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(19)}px;
  padding: 0 ${RFValue(7)}px;
`;

export const CarInfoSection = styled.View`
 
`;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(22)}px;
`;

export const RentInfoSection = styled.View`
 
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(22)}px;
`;

export const SpecificationSection = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_one};
  padding: ${RFValue(21)}px ${RFValue(21)}px ${RFValue(8 + 21)}px;
`;

export const ScheduleDateInfoSection = styled.View`
  /* background-color: orange; */
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(32)}px;
  margin-left: ${RFValue(7)}px;
  padding-right: ${RFValue(23)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  padding-bottom: ${RFValue(14)}px;
`;

export const CalendarIconSection = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  width: ${RFValue(43)}px;
  height: ${RFValue(43)}px;
  align-items: center;
  justify-content: center;
`;

export const PeriodSection = styled.View``;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(5)}px;
  height: ${RFValue(19)}px;
`;

export const PriceSection = styled.View`
  width: 100%;
  margin-top: ${RFValue(15)}px;
`;

export const PriceLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
`;

export const PriceDetailsSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Instalments = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: ${RFValue(13)}px;
`;

export const Cost = styled.Text`
  color: ${({ theme }) => theme.colors.correct};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(21)}px;
`;