import { StatusBar } from 'react-native'
import React from 'react'

import Logo from '../../assets/logo.svg'

import {
  CarQuantity,
  Container,
  Header
} from './styles';
import { CarCard } from '../../components/CarCard';


// interface HomeProps {
// }

export const Home = () => {

  const carData = {
    brand: 'audi', 
    name: 'RS 5 Coupé', 
    period: 'daily', 
    price: 35, 
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png', 
  }

  const carData2 = {
    brand: 'audi', 
    name: 'RS 5 Coupé', 
    period: 'daily', 
    price: 35, 
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png', 
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Logo />
        <CarQuantity>12 cars available</CarQuantity>
      </Header>

      <CarCard
         brand={carData.brand}
         name={carData.name}
         period={carData.period}
         price={carData.price}
         thumbnail={carData.thumbnail}
      />
      <CarCard
         brand={carData.brand}
         name={carData.name}
         period={carData.period}
         price={carData.price}
         thumbnail={carData.thumbnail}
      />

    </Container>
  );
};
