import React, { useState } from 'react';
import {
  Dimensions, NativeScrollEvent, NativeSyntheticEvent,
} from 'react-native';

import {
  Container,
  Indexes,
  ImageIndex,
  PictureSection,
  Picture,
  PicturesList,
} from './styles';

interface CarPhotos {
  id: string;
  photo: string;
}

interface CarouselProps {
  imagesUrls: CarPhotos[];
}

export const Carousel = ({ imagesUrls }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // use X offset with width to figure out which image is being displayed
    const { width } = Dimensions.get('window');
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / width);

    setCurrentImageIndex(currentIndex);
  };

  return (
    <Container>
      <Indexes>
        {imagesUrls.map((item, index) => (
          <ImageIndex key={item.id} active={index === currentImageIndex} />
        ))}
      </Indexes>

      <PicturesList
        data={imagesUrls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PictureSection>
            <Picture source={{ uri: item.photo }} resizeMode="contain" />
          </PictureSection>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => handleOnScroll(e)}
      />
    </Container>
  );
};
