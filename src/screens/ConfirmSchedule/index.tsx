import React, { useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import NetInfo from '@react-native-community/netinfo';

import { BackButton } from '../../components/BackButton';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';
import { RentalPeriod } from '../Schedule';
import { api } from '../../services/api';
// import { ScheduleByCarsDTO } from '../../dtos/ScheduleByCarsDTO';

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
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [hasInternet, setHasInternet] = useState(false);

  const theme = useTheme();
  const { navigate } = useNavigation();

  const route = useRoute();
  const { car, rentalPeriod } = route.params as RouteParams;

  const { dates } = rentalPeriod;

  const handleRentRequest = async () => {
    try {
      setIsLoading(true);
      // const response = await api.get<ScheduleByCarsDTO>(`schedules_bycars/${car.id}`);

      // const unavailable_dates = [
      //   ...response.data.unavailable_dates,
      //   ...dates,
      // ];

      // await api.post('schedules_byuser', {
      //   user_id: 1,
      //   car,
      //   startDate: rentalPeriod.startDateFormatted,
      //   endDate: rentalPeriod.endDateFormatted,
      // });
      const rentTotal = car.price * rentalPeriod.totalNumberOfDays;
      await api.post('rentals', {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(dates[0]),
        end_date: new Date(dates[dates.length - 1]),
        total: rentTotal,
      });

      // await api.put(`schedules_bycars/${car.id}`, {
      //   id: car.id,
      //   unavailable_dates,
      // });

      navigate('Success', {
        title: 'Successfully Rented!',
        message: ' Now you just need to go\nto the RENTX dealership and\nget your vehicle.',
        nextScreenRoute: 'Home',
      });
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Sorry', 'An error occurred during confirmation. Please try again later.');
    }
  };

  // const halfWayIndex = Math.ceil(car.accessories.length / 2);

  // const firstHalfOfCarAccessories = car.accessories.slice(0, halfWayIndex);
  // const secondHalfOfCarAccessories = car.accessories.slice(halfWayIndex);
  let halfWayIndex;
  let firstHalfOfCarAccessories;
  let secondHalfOfCarAccessories;

  if (carUpdated.accessories) {
    halfWayIndex = Math.ceil(carUpdated.accessories.length / 2);
    firstHalfOfCarAccessories = carUpdated.accessories.slice(0, halfWayIndex);
    secondHalfOfCarAccessories = carUpdated.accessories.slice(halfWayIndex);
  }

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected === true) {
        setHasInternet(true);

        (async () => {
          const response = await api.get<CarDTO>(`cars/${car.id}`);
          setCarUpdated(response.data);
        })();
      } else if (state.isConnected === false) {
        setHasInternet(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        {/* <Carousel imagesUrls={car.photos} /> */}
        <Carousel imagesUrls={
          // eslint-disable-next-line no-extra-boolean-cast
          !!carUpdated.photos
            ? carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
        }
        />
      </CarouselSection>

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>{car.brand}</Brand>
            <Name>{car.brand}</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>{car.period}</Period>
            {/* <Price>{`R$ ${car.price}`}</Price> */}
            <Price>{`R$ ${hasInternet ? car.price : '...'}`}</Price>

          </RentInfoSection>
        </FirstSection>

        { (firstHalfOfCarAccessories && secondHalfOfCarAccessories) && (
          <>
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
          </>
        )}

        {/* <SpecificationSection>
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
              {`R$ ${car.price} x ${rentalPeriod.totalNumberOfDays} days`}
            </Installments>
            <Cost>
              {`R$ ${car.price * rentalPeriod.totalNumberOfDays}`}
            </Cost>
          </PriceDetailsSection>
        </PriceSection>
      </Main>

      <Footer>
        <Button
          title="Rent now"
          onPress={handleRentRequest}
          disabled={!hasInternet || isLoading}
          color={theme.colors.correct}
          isLoading={isLoading}
        />
      </Footer>
    </Container>
  );
};
