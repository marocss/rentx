import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';

import speedSvg from '../../assets/speed.svg'
import accelerateSvg from '../../assets/acceleration.svg'
import forceSvf from '../../assets/force.svg'
import gasSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  CarouselSection,
  Main,
  FirstSection,
  CarInfoSection,
  Brand,
  Name,
  RentInfoSection,
  Period,
  Price,
  SpecificationSection,
  Description
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

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>audi</Brand>
            <Name>RS 5 Coupé</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>Daily</Period>
            <Price>$ 35</Price>

          </RentInfoSection>
        </FirstSection>

        <SpecificationSection>
          <SpecificationCard 
            name="236 mph"
            icon={speedSvg}
          />
          <SpecificationCard 
            name="3.2s"
            icon={accelerateSvg}
          />
          <SpecificationCard 
            name="800 HP"
            icon={forceSvf}
          />
          <SpecificationCard 
            name="Gas"
            icon={gasSvg}
          />
          <SpecificationCard 
            name="Automatic"
            icon={exchangeSvg}
          />
          <SpecificationCard 
            name="2 people"
            icon={peopleSvg}
          />
        </SpecificationSection>

        <Description>
          Este é automóvel desportivo. Surgiu do lendário touro de lide 
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro 
          para quem gosta de acelerar.
        </Description>
      </Main>
    </Container>
  )
}