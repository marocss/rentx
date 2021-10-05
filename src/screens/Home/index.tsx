import { StatusBar } from 'react-native'
import React from 'react'

import Logo from '../../assets/logo.svg'

import {
  CarQuantity,
  Container,
  Header
} from './styles';


// interface HomeProps {
// }

export const Home = () => {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Logo />
        <CarQuantity>12 cars available</CarQuantity>
      </Header>
    </Container>
  );
};
