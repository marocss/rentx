import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent, ViewToken } from 'react-native';

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

interface onViewableItemsChangedProps {
  viewableItems: ViewToken[];
  changed: ViewToken[]
}

export const Carousel = ({ imagesUrls }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleOnViewableItemsChanged = useRef(((info: onViewableItemsChangedProps) => {
    // console.log(info);
    const index = info.viewableItems[0].index!
    setCurrentImageIndex(index)
  }))

  // // my way: using onScroll
  // const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   // use X offset with width to figure out which image is being displayed
  //   const { width } = Dimensions.get('window')
  //   console.log(event.nativeEvent.contentOffset);
  //   const currentIndex = Math.round(event.nativeEvent.contentOffset.x / width)

  //   setCurrentImageIndex(currentIndex)
  // }

  return (
    <Container>
      <Indexes>
        {imagesUrls.map((image, index) => (
          <ImageIndex key={image} active={index === currentImageIndex} />
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
          pagingEnabled
          // onScroll={e => handleOnScroll(e)}
          onViewableItemsChanged={handleOnViewableItemsChanged.current}
        />
    </Container>
  )
}