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