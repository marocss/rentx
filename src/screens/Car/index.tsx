import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Animated, {
  useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, interpolate, Extrapolate,
} from 'react-native-reanimated';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
// import { Carousel } from '../../components/Carousel';
// import { SpecificationCard } from '../../components/SpecificationCard';
import { CarDTO } from '../../dtos/CarDTO';
// import { getRelatedSvgIcon } from '../../utils/getRelatedSvgIcon';

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
  // SpecificationSection,
  Description,
  Footer,
} from './styles';

interface RouteParams {
  car: CarDTO;
}

export const Car = () => {
  const { navigate } = useNavigation();

  const route = useRoute();
  const { car } = route.params as RouteParams;

  const handleSelectCar = () => {
    navigate('Schedule', {
      car,
    });
  };

  // const halfWayIndex = Math.ceil(car.accessories.length / 2);
  // const firstHalfOfCarAccessories = car.accessories.slice(0, halfWayIndex);
  // const secondHalfOfCarAccessories = car.accessories.slice(halfWayIndex);

  const scrollY = useSharedValue(0);

  // TODO: fix bug: when scrolling up if content is not big enough to fill whole screen
  // the app crashes
  const headerStyleAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 173],
        [173, 0],
        Extrapolate.CLAMP,
      ),
      opacity: interpolate(
        scrollY.value,
        [0, 100],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

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
          {/* <Carousel imagesUrls={car.photos} /> */}
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
            <Price>{`R$ ${car.price}`}</Price>
          </RentInfoSection>
        </FirstSection>

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

        <Description>
          {car.about}
        </Description>
      </Animated.ScrollView>

      <Footer>
        <Button title="Select" color="" onPress={handleSelectCar} />
      </Footer>
    </Container>
  );
};
