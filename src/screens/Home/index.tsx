import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'

import Logo from '../../assets/logo.svg'

import {
  CarList,
  CarQuantity,
  Container,
  Header
} from './styles';
import { CarCard } from '../../components/CarCard';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Loading } from '../../components/Loading';

// interface HomeProps {
// }

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const { navigate } = useNavigation()

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<CarDTO[]>('cars')
        
        setCars(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
    })()

    // return () => {
    // }
  }, [])

  const handleCarCard = () => {
    navigate('Car')
  }

  if (isLoading) {
    <Loading />
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

      { isLoading ? (<Loading />) : (
        <CarList
          data={cars}
          keyExtractor={ item => item.id}
          renderItem={({ item }) => 
            <CarCard
              brand={item.brand}
              name={item.name}
              period={item.rent.period}
              price={item.rent.price}
              thumbnail={item.thumbnail}
              onPress={handleCarCard}
            />
          }
        />
      )}
    </Container>
  );
};
