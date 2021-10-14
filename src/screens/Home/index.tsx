import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg'
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  CarList,
  CarQuantity,
  Container,
  Header
} from './styles';


export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const { navigate } = useNavigation()

  const handleCarCard = (car: CarDTO) => {
    navigate('Car', { car })
  }

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
  }, [])

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Logo />
        <CarQuantity>{cars.length} cars available</CarQuantity>
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
              icon={item.fuel_type}
              onPress={() => handleCarCard(item)}
            />
          }
        />
      )}
    </Container>
  );
};
