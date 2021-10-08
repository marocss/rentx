import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Carousel } from '../../components/Carousel';

import {
  Container,
  Header,
  CarouselSection,
} from './styles';

// interface CarProps {
// }

export const Car = () => {

  const images = [
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
  ]


  return (
    <Container>
      <Header>
        <BackButton onPress={() => console.log('hi')} />
      </Header>
      <CarouselSection>
        <Carousel imagesUrls={images} />
      </CarouselSection>
    </Container>
  )
}