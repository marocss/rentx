import { StatusBar } from 'react-native'
import React from 'react'

import Logo from '../../assets/logo.svg'

import {
  CarList,
  CarQuantity,
  Container,
  Header
} from './styles';
import { CarCard } from '../../components/CarCard';
import { useNavigation } from '@react-navigation/native';

// interface HomeProps {
// }

export const Home = () => {
  const { navigate } = useNavigation()

  const carData = {
    brand: 'audi', 
    name: 'RS 5 Coupe', 
    period: 'daily', 
    price: 35, 
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png', 
  }

  const carData2 = {
    brand: 'audi', 
    name: 'RS 5 Coupe', 
    period: 'daily', 
    price: 35, 
    thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png', 
  }

  const handleCarCard = () => {
    navigate('Car')
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

      <CarList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={ item => String(item)}
        renderItem={({ item }) => 
          <CarCard
            brand={carData.brand}
            name={carData.name}
            period={carData.period}
            price={carData.price}
            thumbnail={carData.thumbnail}
            onPress={handleCarCard}
          />
        }
      />
        
    </Container>
  );
};
