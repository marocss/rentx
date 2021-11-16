import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-unused-vars
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { LoadingCarAnimation } from '../../components/LoadingCarAnimation';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  CarList,
  CarQuantity,
  Container,
  Header,
} from './styles';

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();
  // const netInfo = useNetInfo();

  const handleCarCard = (car: CarDTO) => {
    navigate('Car', { car });
  };

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await api.get<CarDTO[]>('cars');

        if (isMounted) {
          setCars(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  // useEffect(() => {
  //   if (netInfo.isConnected) {
  //     Alert.alert('has connection');
  //   } else {
  //     Alert.alert('no connection');
  //   }

  //   // return () => {
  //   // };
  // }, [netInfo.isConnected]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // eslint-disable-next-line no-console
      // console.log('Connection type', state.type);
      // eslint-disable-next-line no-console
      // console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        Alert.alert('has connection');
      } else {
        Alert.alert('no connection');
      }
    });

    return () => {
      // To unsubscribe to these update, just use:
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Logo />
        { !isLoading
          && (
            <CarQuantity>{`${cars.length} cars available`}</CarQuantity>
          )}
      </Header>

      { isLoading ? (<LoadingCarAnimation />) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarCard
              brand={item.brand}
              name={item.name}
              period={item.period}
              price={item.price}
              thumbnail={item.thumbnail}
              icon={item.fuel_type}
              onPress={() => handleCarCard(item)}
            />
          )}
        />
      )}
    </Container>
  );
};
