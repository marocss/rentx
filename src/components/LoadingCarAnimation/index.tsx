import React from 'react';
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/car-loading-animation.json';
import { Container } from './styles';

export const LoadingCarAnimation = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 180 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};
