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
  Description,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// interface CarProps {
// }

export const Car = () => {
  const { navigate } = useNavigation()

  const handleSelectCar = () => {
    navigate('Schedule')
  }

  const images = [
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
  ]


  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton />
      </Header>

      <CarouselSection>
        <Carousel imagesUrls={images} />
      </CarouselSection>

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>audi</Brand>
            <Name>RS 5 Coupe</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>Daily</Period>
            <Price>$ 35</Price>

          </RentInfoSection>
        </FirstSection>

        <SpecificationSection>
          <SpecificationCard 
            name="155 mph"
            icon={speedSvg}
          />
          <SpecificationCard 
            name="3.7s"
            icon={accelerateSvg}
          />
          <SpecificationCard 
            name="444 HP"
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
          Delivering the performance you seek with uncompromised styling, the Audi 
          RS 5 Coupe delivers an exhilarating performance.
          Every aspect and angle of the Audi RS 5 Coupe has been meticulously 
          designed to captivate.
        </Description>

      </Main>
      <Footer>
        <Button title="Select" color="" onPress={handleSelectCar} />
      </Footer>

    </Container>
  )
}