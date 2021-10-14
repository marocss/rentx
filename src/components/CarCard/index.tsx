import React from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components';
import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';

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

interface CarCardProps extends PressableProps {
  brand: string;
  name: string;
  period: string;
  price: number;
  thumbnail: string;
  icon: string;
}

export const CarCard = ({ 
  brand, 
  name, 
  period, 
  price, 
  thumbnail, 
  icon, 
  ...rest }: CarCardProps) => {
  const theme = useTheme()

  const Icon = getRelatedSvgIcon(icon)

  return (
    <Container {...rest} >
      <InfoSection>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <About>
          <RentInfo>
            <Period>{period}</Period>
            <Price>R$ {price}</Price>
          </RentInfo>

          <FuelType>
            <Icon 
              color={theme.colors.text_light}
            />
          </FuelType>
        </About>
      </InfoSection>

      <Thumbnail>
        <Picture source={{ uri: thumbnail }} resizeMode="contain" />
      </Thumbnail>
    </Container>
  )
}