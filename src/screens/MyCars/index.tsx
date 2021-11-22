import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';
import { format, addDays } from 'date-fns';
import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { LoadingCarAnimation } from '../../components/LoadingCarAnimation';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Main,
  MainHeader,
  MainHeaderTitle,
  Quantity,
  Cars,
  PeriodSection,
  PeriodSectionTitle,
  PeriodDateSection,
  PeriodDate,
} from './styles';

interface CarProps {
  car: CarDTO;
  id: number;
  user_id: number;
  start_date: string;
  end_date: string;
}

export const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isScreenFocused = useIsFocused();

  const theme = useTheme();

  const formatDate = (date: string) => {
    // console.log('====================================');
    // console.log('date: ', date);
    // console.log('format(parseISO(date): ', format(addDays(new Date(date), 1), 'dd/MM/yyyy'));
    // console.log('====================================');
    return format(addDays(new Date(date), 1), 'dd/MM/yyyy');
  };

  useEffect(() => {
    (async () => {
      try {
        // const userId = 1;
        // const response = await api.get<CarProps[]>(`schedules_byuser?user_id=${userId}`);
        const response = await api.get<CarProps[]>('rentals');

        setCars(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isScreenFocused]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          color={theme.colors.white}
        />

        <Title>{'Your scheduled cars\nare here.'}</Title>

        <Subtitle>Practical. Comfortable. Safe.</Subtitle>
      </Header>

      { isLoading ? (
        <LoadingCarAnimation />
      ) : (
        <Main>
          <MainHeader>
            <MainHeaderTitle>Schedules made</MainHeaderTitle>
            <Quantity>{cars.length}</Quantity>
          </MainHeader>

          <Cars
            data={cars}
            keyExtractor={(item, index) => item.car.id + index}
            renderItem={({ item }) => (
              <>
                <CarCard
                  brand={item.car.brand}
                  name={item.car.name}
                  period={item.car.period}
                  price={item.car.price}
                  thumbnail={item.car.thumbnail}
                  icon={item.car.fuel_type}
                />
                <PeriodSection>
                  <PeriodSectionTitle>Period</PeriodSectionTitle>
                  <PeriodDateSection>
                    <PeriodDate>{formatDate(item.start_date)}</PeriodDate>
                    <AntDesign
                      name="arrowright"
                      size={14}
                      color={theme.colors.text_light}
                    />
                    <PeriodDate>{formatDate(item.end_date)}</PeriodDate>
                  </PeriodDateSection>
                </PeriodSection>
              </>
            )}
          />
        </Main>
      ) }
    </Container>
  );
};
