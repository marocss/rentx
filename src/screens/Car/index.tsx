import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// eslint-disable-next-line no-unused-vars
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

import Animated, {
  useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withTiming,
} from 'react-native-reanimated';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';
import { CarDTO } from '../../dtos/CarDTO';
import { Car as CarModel } from '../../database/model/Car';
import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';

import {
  Container,
  Header,
  CarouselSection,
  FirstSection,
  CarInfoSection,
  Brand,
  Name,
  RentInfoSection,
  Period,
  Price,
  SpecificationSection,
  Description,
  Footer,
  OfflineCard,
} from './styles';
import { api } from '../../services/api';

interface RouteParams {
  car: CarModel;
}

export const Car = () => {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [hasInternet, setHasInternet] = useState(false);

  const { navigate } = useNavigation();

  const route = useRoute();
  const { car } = route.params as RouteParams;
  // const netInfo = useNetInfo();

  const handleSelectCar = () => {
    navigate('Schedule', { car });
  };

  let halfWayIndex;
  let firstHalfOfCarAccessories;
  let secondHalfOfCarAccessories;

  if (carUpdated.accessories) {
    halfWayIndex = Math.ceil(carUpdated.accessories.length / 2);
    firstHalfOfCarAccessories = carUpdated.accessories.slice(0, halfWayIndex);
    secondHalfOfCarAccessories = carUpdated.accessories.slice(halfWayIndex);
  }

  const scrollY = useSharedValue(0);

  // fixed bug: added withTiming() around interpolate function (https://github.com/software-mansion/react-native-reanimated/issues/1947)
  const headerStyleAnimated = useAnimatedStyle(() => {
    return {
      height: withTiming(interpolate(
        scrollY.value,
        [0, 173],
        [173, 0],
        Extrapolate.CLAMP,
      )),
      opacity: withTiming(interpolate(
        scrollY.value,
        [0, 100],
        [1, 0],
        Extrapolate.CLAMP,
      )),
    };
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

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

      <Animated.View style={[headerStyleAnimated, { zIndex: -1 }]}>
        <CarouselSection>
          <Carousel imagesUrls={
            // eslint-disable-next-line no-extra-boolean-cast
            !!carUpdated.photos
              ? carUpdated.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
          }
          />
        </CarouselSection>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingLeft: 16,
          paddingRight: 16,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        bounces={false}
      >
        <FirstSection>
          <CarInfoSection>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>{car.period}</Period>
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

        <Description>
          {car.about}
        </Description>
      </Animated.ScrollView>

      <Footer>
        <Button
          title="Select"
          onPress={handleSelectCar}
          disabled={!hasInternet}
        />
        { !hasInternet && (
          <OfflineCard>
            You need a internet connection to rent a car.
          </OfflineCard>
        )}
      </Footer>
    </Container>
  );
};
