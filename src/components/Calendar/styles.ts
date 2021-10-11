import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
`;