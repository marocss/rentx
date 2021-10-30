import React, { useEffect, useState } from 'react';
import { Pressable, StatusBar, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle, useSharedValue, useAnimatedGestureHandler, withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
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

const AnimatedButton = Animated.createAnimatedComponent(Pressable);

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const { navigate } = useNavigation();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      // positionX.value = withSpring(0)
      positionY.value = withSpring(0);
    },
  });

  const handleCarCard = (car: CarDTO) => {
    navigate('Car', { car });
  };

  const handleOpenMyCars = () => {
    navigate('MyCars');
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<CarDTO[]>('cars');

        setCars(response.data);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    // avoid going back to splash screen
    const eventListener = BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () => {
      eventListener.remove();
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
          <CarQuantity>
            {cars.length}
            {' '}
            cars available
          </CarQuantity>
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
              period={item.rent.period}
              price={item.rent.price}
              thumbnail={item.thumbnail}
              icon={item.fuel_type}
              onPress={() => handleCarCard(item)}
            />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 27,
              right: 19,
            },
          ]}
        >
          <AnimatedButton
            style={
            {
              width: 58,
              height: 58,
              borderRadius: 29,
              backgroundColor: theme.colors.main,
              justifyContent: 'center',
              alignItems: 'center',
            }
          }
            onPress={handleOpenMyCars}
          >
            <Ionicons name="ios-car-sport" size={32} color={theme.colors.white} />
          </AnimatedButton>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};
