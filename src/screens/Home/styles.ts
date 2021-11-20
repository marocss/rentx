import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Car as CarModel } from '../../database/model/Car';

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

export const CarList = styled(FlatList as new () => FlatList<CarModel>).attrs({
  contentContainerStyle: {
    padding: 24,
    paddingTop: 16,
  },
  showsVerticalScrollIndicator: false,
})`
`;
export const MyCarsButton = styled.Pressable`
  width: ${RFValue(53)}px;
  height: ${RFValue(53)}px;
  border-radius: ${RFValue(28)}px;
  background-color: ${({ theme }) => theme.colors.main};
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: ${RFValue(27)}px;
  right: ${RFValue(19)}px;
`;
