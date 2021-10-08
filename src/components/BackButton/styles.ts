import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: ${RFValue(43)}px;
  height: ${RFValue(43)}px;
  justify-content: center;
  align-items: center;
`;