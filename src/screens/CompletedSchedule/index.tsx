import React from 'react';

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
  Container,
  Main,
  Title,
  Body
} from './styles';
import { StatusBar, useWindowDimensions } from 'react-native';
import { SmallButton } from '../../components/SmallButton';
import { RFValue } from 'react-native-responsive-fontsize';

// interface CompletedScheduleProps {
// }

export const CompletedSchedule = () => {
  const { width } = useWindowDimensions()


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
        <Title>Successfully Rented!</Title>
        <Body>
          Now you just need to go 
          {'\n'}
          to the RENTX dealership and 
          {'\n'}
          get your vehicle.
        </Body>

        <SmallButton text="Ok" />
      </Main>
    </Container>
  )
}