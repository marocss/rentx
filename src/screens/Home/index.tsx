/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync';
import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';
import { LoadingCarAnimation } from '../../components/LoadingCarAnimation';
import { api } from '../../services/api';
import { database } from '../../database';
import { Car as CarModel } from '../../database/model/Car';

import {
  CarList,
  CarQuantity,
  Container,
  Header,
} from './styles';

interface PullChangesData {
  changes: SyncDatabaseChangeSet;
  latestVersion: number;
}

export const Home = () => {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  const handleCarCard = (car: CarModel) => {
    console.log('====================================');
    console.log('car: ', car);
    console.log('====================================');
    navigate('Car', { car });
  };

  const offlineSynchronize = async () => {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const { data } = await api
          .get<PullChangesData>(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

        const { changes, latestVersion } = data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        console.log('====================================');
        console.log('app to backend (pushChanges): ', changes);
        console.log('====================================');
        const user = changes.users;
        try {
          await api.post('/users/sync', user);
        } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
        }
      },
    });
  };

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const carsCollection = database.get<CarModel>('cars');
        const allCars = await carsCollection.query().fetch();

        if (isMounted) {
          setCars(allCars);
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

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === true) {
        offlineSynchronize();
      } else {
        // Alert.alert('no connection');
      }
    });

    return () => {
      // To unsubscribe to these update, just use:
      unsubscribe();
    };
  }, []);

  // const clearDB = async () => {
  //   // offlineSynchronize();

  //   await database.write(async () => {
  //     await database.unsafeResetDatabase();
  //   });
  // };

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
