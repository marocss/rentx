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

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  /* text-align: justify; */
  margin-top: ${RFValue(18)}px;
  line-height: ${RFValue(22)}px;
  margin-bottom: ${RFValue(22)}px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_one};
  padding: ${RFValue(21)}px ${RFValue(21)}px ${RFValue(8 + 21)}px;
`;
