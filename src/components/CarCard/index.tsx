import React from 'react';

import {
  Container,
  InfoSection,
  Brand,
  Name,
  About,
  RentInfo,
  Period,
  Price,
  FuelType,
  GasIcon,
  ElectricIcon,
  Thumbnail,
  Picture
} from './styles';

interface CarCardProps {
  brand: string;
  name: string;
  period: string;
  price: number;
  thumbnail: string;
}

export const CarCard = ({brand, name, period, price, thumbnail}: CarCardProps) => {

  return (
    <Container>
      <InfoSection>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <RentInfo>
            <Period>{period}</Period>
            <Price>$ {price}</Price>
          </RentInfo>

          <FuelType>
            <GasIcon />
          </FuelType>
        </About>
      </InfoSection>

      <Thumbnail>
        <Picture source={{ uri: thumbnail }} resizeMode="contain" />
      </Thumbnail>


    </Container>
  )
}