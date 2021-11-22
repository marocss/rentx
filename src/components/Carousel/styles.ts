import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';

interface ImageIndexProps {
  active: boolean;
}

interface CarPhotos {
  id: string;
  photo: string;
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
  background-color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)
};
`;

export const PicturesList = styled(FlatList as new () => FlatList<CarPhotos>).attrs({
  contentContainerStyle: {
  },
  showsHorizontalScrollIndicator: false,
})`
`;

export const PictureSection = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 186px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(4)}px;
`;

export const Picture = styled(FastImage)`
  height: 100%;
  width: 100%;
`;
