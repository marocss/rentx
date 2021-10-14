import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Gasoline from '../../assets/gasoline.svg'
import Energy from '../../assets/energy.svg'

export const Container = styled.Pressable`
  width: 100%;
  min-height: ${RFValue(115)}px;
  background-color: ${({ theme }) => theme.colors.background_two};
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${RFValue(21)}px;
  padding-right: ${RFValue(21)}px;
  margin-bottom: ${RFValue(14)}px;
  align-items: center;
`;

export const InfoSection = styled.View`
  padding-top: ${RFValue(21)}px;
  padding-bottom: ${RFValue(21)}px;
  width: 30%;
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
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(3)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 16px;
`;

export const RentInfo = styled.View`
  margin-right: 24px;
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
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(3)}px;
`;

export const FuelType = styled.View`
`;

export const GasIcon = styled(Gasoline)`
  color: ${({ theme }) => theme.colors.text_light};
  width: ${RFValue(17)}px;
  height: ${RFValue(17)}px;
`;

export const ElectricIcon = styled(Energy)`
  color: ${({ theme }) => theme.colors.text_light};
  width: ${RFValue(17)}px;
  height: ${RFValue(17)}px;
`;

export const Thumbnail = styled.View`
  height: ${RFValue(115)}px;
  width: 60%;
`;

export const Picture = styled.Image`
  height: 100%;
`;