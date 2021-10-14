import React from 'react';

import {
  Container,
  Indexes,
  ImageIndex,
  Thumbnail,
  Picture,
} from './styles';

interface CarouselProps {
  imagesUrls: string[];
}

export const Carousel = ({ imagesUrls }: CarouselProps) => {
  return (
    <Container>
      <Indexes>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </Indexes>

      <Thumbnail>
        <Picture source={{ uri: imagesUrls[0] }} resizeMode="contain" />
      </Thumbnail>
    </Container>
  )
}