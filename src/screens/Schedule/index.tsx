import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { addDays, eachDayOfInterval, format } from 'date-fns'

import ArrowSvg from '../../assets/arrow.svg'
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, CalendarDayProps, CalendarMarkedDatesProps } from '../../components/Calendar';

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
  const [lastSelectedDate, setLastSelectedDate] = useState<CalendarDayProps>({} as CalendarDayProps)
  const [markedDates, setMarkedDates] = useState<CalendarMarkedDatesProps>({} as CalendarMarkedDatesProps)
  const theme = useTheme()
  
  const { navigate } = useNavigation()

  const handleConfirmation = () => {
    navigate('ConfirmSchedule')
  }

  const generateInterval = (start: CalendarDayProps, end: CalendarDayProps) => {
    let interval: CalendarMarkedDatesProps = {}

    eachDayOfInterval({ 
      start: new Date(start.timestamp),
      end: new Date(end.timestamp)
    }).forEach(( item ) => {

      const date = format(addDays(item, 1), 'yyyy-MM-dd')

      interval = {
        ...interval,
        [date]: {
          color: start.dateString === date || end.dateString === date ? theme.colors.main : theme.colors.main_light,
          textColor: start.dateString === date || end.dateString === date ? theme.colors.white : theme.colors.main,
        }
      }
    }) 

    return interval
  }

  const handleDayPress = (date: CalendarDayProps) => {
    console.log('date: ', date)
    let startDate
    let endDate

    const hasSelectedAnyDate = lastSelectedDate.timestamp != undefined
    if (hasSelectedAnyDate) {
      startDate = lastSelectedDate
    } else {
      startDate = date
    }
    endDate = date


    const isEndDateBeforeStartDate = startDate.timestamp > endDate.timestamp
    if (isEndDateBeforeStartDate) {
      // reverse dates
      startDate = endDate
      endDate = startDate
    }

    // console.log('startDate: ', startDate)
    // console.log('endDate: ', endDate)
    setLastSelectedDate(endDate)
    const interval = generateInterval(startDate, endDate)
    setMarkedDates(interval)
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
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleDayPress}
        />
      </Main>

      <Footer>
        <Button title="Confirm" onPress={handleConfirmation} />
      </Footer>
    </Container>
  )
}