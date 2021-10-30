import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';
import { RentalPeriod } from '../Schedule';
import { api } from '../../services/api';
import { ScheduleByCarsDTO } from '../../dtos/ScheduleByCarsDTO';

import {
  Container,
  Header,
  CarouselSection,
  Main,
  FirstSection,
  CarInfoSection,
  Brand,
  Name,
  RentInfoSection,
  Period,
  Price,
  SpecificationSection,
  Footer,
  ScheduleDateInfoSection,
  CalendarIconSection,
  PeriodSection,
  DateTitle,
  DateValue,
  PriceSection,
  PriceLabel,
  PriceDetailsSection,
  Installments,
  Cost,
} from './styles';

interface RouteParams {
  car: CarDTO;
  rentalPeriod: RentalPeriod;
}

export const ConfirmSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const { navigate } = useNavigation();

  const route = useRoute();
  const { car, rentalPeriod } = route.params as RouteParams;

  // console.log(car.id)
  const { dates } = rentalPeriod;

  const handleRentRequest = async () => {
    try {
      setIsLoading(true);
      const response = await api.get<ScheduleByCarsDTO>(`schedules_bycars/${car.id}`);

      const unavailable_dates = [
        ...response.data.unavailable_dates,
        ...dates,
      ];

      await api.post('schedules_byuser', {
        user_id: 1,
        car,
        startDate: rentalPeriod.startDateFormatted,
        endDate: rentalPeriod.endDateFormatted,
      });

      await api.put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      });

      navigate('CompletedSchedule');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      setIsLoading(false);
      Alert.alert('Sorry', 'An error occurred during confirmation. Please try again later.');
    }
  };

  const halfWayIndex = Math.ceil(car.accessories.length / 2);

  const firstHalfOfCarAccessories = car.accessories.slice(0, halfWayIndex);
  const secondHalfOfCarAccessories = car.accessories.slice(halfWayIndex);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton />
      </Header>

      <CarouselSection>
        <Carousel imagesUrls={car.photos} />
      </CarouselSection>

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>{car.brand}</Brand>
            <Name>{car.brand}</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>{car.rent.period}</Period>
            <Price>
              R$
              {' '}
              {car.rent.price}
            </Price>
          </RentInfoSection>
        </FirstSection>

        <SpecificationSection>
          {firstHalfOfCarAccessories.map((accessory) => (
            <SpecificationCard
              key={accessory.type}
              name={accessory.name}
              icon={getRelatedSvgIcon(accessory.type)}
            />
          ))}
        </SpecificationSection>
        <SpecificationSection>
          {secondHalfOfCarAccessories.map((accessory) => (
            <SpecificationCard
              key={accessory.type}
              name={accessory.name}
              icon={getRelatedSvgIcon(accessory.type)}
            />
          ))}
        </SpecificationSection>

        {/* <SpecificationSection>
        {car.accessories.map(accessory => (
            <SpecificationCard
              key={accessory.type}
              name={accessory.name}
              icon={getRelatedSvgIcon(accessory.type)}
            />
          ))}
        </SpecificationSection> */}

        <ScheduleDateInfoSection>
          <CalendarIconSection>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.white}
            />
          </CalendarIconSection>

          <PeriodSection>
            <DateTitle>FROM</DateTitle>
            <DateValue>{rentalPeriod.startDateFormatted}</DateValue>
          </PeriodSection>

          <Feather
            name="chevron-right"
            size={RFValue(15)}
            color={theme.colors.text}
          />

          <PeriodSection>
            <DateTitle>TO</DateTitle>
            <DateValue>{rentalPeriod.endDateFormatted}</DateValue>
          </PeriodSection>
        </ScheduleDateInfoSection>

        <PriceSection>
          <PriceLabel>TOTAL</PriceLabel>
          <PriceDetailsSection>
            <Installments>
              R$
              {' '}
              {car.rent.price}
              {' '}
              x
              {rentalPeriod.totalNumberOfDays}
              {' '}
              days
            </Installments>
            <Cost>
              R$
              {' '}
              {car.rent.price * rentalPeriod.totalNumberOfDays}
            </Cost>
          </PriceDetailsSection>
        </PriceSection>
      </Main>

      <Footer>
        <Button
          disabled={isLoading}
          isLoading={isLoading}
          title="Rent now"
          color={theme.colors.correct}
          onPress={handleRentRequest}
        />
      </Footer>
    </Container>
  );
};
