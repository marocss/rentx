import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { SmallButton } from '../../components/SmallButton';

import {
  Container,
  Main,
  Title,
  Body,
} from './styles';

interface SuccessRouteParams {
  title: string;
  message: string;
  nextScreenRoute: 'Home' | 'SignIn';
}

export const Success = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as SuccessRouteParams;

  const handleOkButton = () => {
    // navigate('Home');
    navigate(nextScreenRoute);
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} height={RFValue(255)} />

      <Main>
        <DoneSvg />

        {/* <Title>Successfully Rented!</Title> */}
        <Title>{title}</Title>

        {/* <Body>
          Now you just need to go
          {'\n'}
          to the RENTX dealership and
          {'\n'}
          get your vehicle.
        </Body> */}
        <Body>{message}</Body>

        <SmallButton text="Ok" onPress={handleOkButton} />
      </Main>
    </Container>
  );
};
