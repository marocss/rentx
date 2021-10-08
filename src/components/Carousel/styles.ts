import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const Indexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
  background-color: ${({ theme, active }) => 
    active ? theme.colors.title : theme.colors.shape
  }
`;

export const Thumbnail = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(165)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(4)}px;
`;

export const Picture = styled.Image`
  height: 100%;
  width: 100%;
`;

