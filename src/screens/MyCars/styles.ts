import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

interface CarProps {
  car: CarDTO;
  id: number;
  user_id: number;
  startDate: string;
  endDate: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  min-height: ${RFValue(252)}px;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${RFValue(44)}px;
  padding-left: ${RFValue(11)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary_bold};
  font-size: ${RFValue(27)}px;
  padding-left: ${RFValue(12)}px;
  margin-top: ${RFValue(21)}px;
  line-height: ${RFValue(32)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${RFValue(13)}px;
  padding-left: ${RFValue(12)}px;
  margin-top: ${RFValue(22)}px;
`;

export const Main = styled.View`
  flex: 1;
  padding: 0 ${RFValue(14)}px;
  `;

export const MainHeader = styled.View`
  padding-left: ${RFValue(7)}px;
  padding-right: ${RFValue(7)}px;
  padding-top: ${RFValue(20)}px;
  padding-bottom: ${RFValue(28)}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const MainHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(13)}px;
`;

export const Quantity = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(13)}px;
`;

export const Cars = styled(FlatList as new () => FlatList<CarProps>).attrs({
  contentContainerStyle: {
    paddingBottom: 32,
  },
  showsVerticalScrollIndicator: false,
})``;

export const PeriodSection = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(14)}px;
  margin-top: -${RFValue(12)}px;
  padding-left: ${RFValue(21)}px;
  padding-right: ${RFValue(21)}px;
  height: ${RFValue(35)}px;
  background-color: ${({ theme }) => theme.colors.background_two};
`;

export const PeriodSectionTitle = styled.Text`
  flex: 2;
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const PeriodDateSection = styled.View`
  flex: 3;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const PeriodDate = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  font-size: ${RFValue(12)}px;
`;
