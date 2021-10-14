import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg'
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  PeriodSection,
  StartDateSection,
  DateTitle,
  DateValue,
  EndDateSection,
  Main,
  Footer,
} from './styles';


export const Schedule = () => {
  const theme = useTheme()
  
  const { navigate } = useNavigation()

  const handleConfirmation = () => {
    navigate('ConfirmSchedule')
  }

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

        <Title>
          Choose the 
          {'\n'}
          period you would
          {'\n'}
          like to rent
        </Title>

        <PeriodSection>
          <StartDateSection selected={true}>
            <DateTitle>FROM</DateTitle>
            <DateValue>10/18/2021</DateValue>
          </StartDateSection>

          <ArrowSvg />

          <EndDateSection selected={false}>
            <DateTitle>TO</DateTitle>
            <DateValue></DateValue>
          </EndDateSection>
        </PeriodSection>
      </Header>

      <Main>
        <Calendar />
      </Main>

      <Footer>
        <Button title="Confirm" onPress={handleConfirmation} />
      </Footer>
    </Container>
  )
}