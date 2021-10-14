import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_one};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(103)}px;
  background-color: ${({ theme }) => theme.colors.header};
  padding-left: ${RFValue(14)}px;
  padding-top: ${RFValue(35)}px;
  padding-right: ${RFValue(21)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  margin-top: ${RFValue(2)}px;
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
    paddingTop: 16
  },
  showsVerticalScrollIndicator: false
})`
  /* color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  margin-top: ${RFValue(2)}px; */
`;