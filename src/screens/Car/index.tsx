import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';
import { CarDTO } from '../../dtos/CarDTO';
import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';

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

interface RouteParams {
  car: CarDTO;
}


export const Car = () => {
  const { navigate } = useNavigation()
  
  const route = useRoute()
  const { car } = route.params as RouteParams

  const handleSelectCar = () => {
    navigate('Schedule', { 
      car
    })
  }

  const halfWayIndex = Math.ceil(car.accessories.length / 2)

  const firstHalfOfCarAccessories = car.accessories.slice(0, halfWayIndex)
  const secondHalfOfCarAccessories = car.accessories.slice(halfWayIndex)

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
        <Carousel imagesUrls={car.photos} />
      </CarouselSection>

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </RentInfoSection>
        </FirstSection>

        <SpecificationSection>
          {firstHalfOfCarAccessories.map(accessory => (
            <SpecificationCard 
              key={accessory.type}
              name={accessory.name}
              icon={getRelatedSvgIcon(accessory.type)}
            />  
          ))}
        </SpecificationSection>
        <SpecificationSection>
          {secondHalfOfCarAccessories.map(accessory => (
            <SpecificationCard 
              key={accessory.type}
              name={accessory.name}
              icon={getRelatedSvgIcon(accessory.type)}
            />  
          ))}
        </SpecificationSection>

        <Description>{car.about}</Description >
      </Main>

      <Footer>
        <Button title="Select" color="" onPress={handleSelectCar} />
      </Footer>
    </Container>
  )
}