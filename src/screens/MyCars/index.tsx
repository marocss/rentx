import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';
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
  startDate: string;
  endDate: string;
}

export const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    (async () => {
      try {
        const userId = 1;
        const response = await api.get<CarProps[]>(`schedules_byuser?user_id=${userId}`);

        setCars(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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
                    <PeriodDate>{item.startDate}</PeriodDate>
                    <AntDesign
                      name="arrowright"
                      size={14}
                      color={theme.colors.text_light}
                    />
                    <PeriodDate>{item.endDate}</PeriodDate>
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
