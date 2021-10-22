import React from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Indexes,
  ImageIndex,
  PictureSection,
  Picture,
  PicturesList,
} from './styles';

interface CarouselProps {
  imagesUrls: string[];
}

export const Carousel = ({ imagesUrls }: CarouselProps) => {
  return (
    <Container>
      <Indexes>
        {imagesUrls.map(image => (
          <ImageIndex key={image} active />
        ))}
      </Indexes>


        <PicturesList 
          data={imagesUrls}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <PictureSection>
              <Picture source={{ uri: item }} resizeMode="contain" />
            </PictureSection>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
    </Container>
  )
}