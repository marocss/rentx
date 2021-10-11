import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'

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
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

// interface ScheduleProps {
// }

export const Schedule = () => {
  const theme = useTheme()

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
          onPress={() => {}} 
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
            <DateValue>18/10/2021</DateValue>
          </StartDateSection>

          <ArrowSvg />

          <EndDateSection selected={false}>
            <DateTitle>TO</DateTitle>
            <DateValue></DateValue>
          </EndDateSection>
        </PeriodSection>
      </Header>

      <Main>

      </Main>

      <Footer>
        <Button title="Confirm" />
      </Footer>
    </Container>
  )
}