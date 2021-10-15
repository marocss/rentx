import React, { useEffect, useState } from 'react';
import { Alert, Platform, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { addDays, eachDayOfInterval, format } from 'date-fns'

import ArrowSvg from '../../assets/arrow.svg'
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, CalendarDayProps, CalendarMarkedDatesProps } from '../../components/Calendar';
import { CarDTO } from '../../dtos/CarDTO';

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

interface RentalPeriod {
  startDateFormatted: string;
  endDateFormatted: string;
  totalNumberOfDays: number;
  dates: string[];
}

interface RouteParams {
  car: CarDTO;
}

const Schedule = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState({} as CalendarDayProps)
  const [markedDates, setMarkedDates] = useState({} as CalendarMarkedDatesProps)
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod)

  const theme = useTheme()
  
  const route = useRoute();
  const { car } = route.params as RouteParams
  
  const { navigate } = useNavigation()

  const handleConfirmation = () => {
    if (rentalPeriod.endDateFormatted !== rentalPeriod.startDateFormatted) {
      navigate('ConfirmSchedule', {
        car,
        rentalPeriod: rentalPeriod
      })
    } else {
      Alert.alert('Period not selected', 'Please select a renting period')
    }
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

    setLastSelectedDate(endDate)
    const interval = generateInterval(startDate, endDate)
    setMarkedDates(interval)

    // const firstDate = Object.keys(interval)[0]
    // const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]

    // console.log(interval)
    setRentalPeriod({
      startDateFormatted: format(addDays(new Date(startDate.timestamp), 1), 'dd/MM/yyyy'),
      endDateFormatted: format(addDays(new Date(endDate.timestamp), 1), 'dd/MM/yyyy'),
      totalNumberOfDays: Object.keys(interval).length,
      dates: Object.keys(interval)
    })
  }

  // console.log('====================================');
  // console.log(rentalPeriod.endDateFormatted != undefined);
  // console.log(rentalPeriod.endDateFormatted !== rentalPeriod.startDateFormatted);
  // console.log(rentalPeriod.startDateFormatted);
  // console.log(rentalPeriod.endDateFormatted);
  // console.log('====================================');

  useEffect(() => {
    // const response = await api.get<ScheduleByCarsDTO>(`schedules_bycars/${car.id}`)
      
    //   const unavailable_dates = [
    //     ...response.data.unavailable_dates,
    //     ...dates
    //   ]
    // return () => {
    // }
  }, [])
  
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
          <StartDateSection selected={rentalPeriod.startDateFormatted != undefined}>
            <DateTitle>FROM</DateTitle>
            <DateValue>{rentalPeriod.startDateFormatted}</DateValue>
          </StartDateSection>

          <ArrowSvg />

          <EndDateSection selected={rentalPeriod.endDateFormatted !== rentalPeriod.startDateFormatted}>
            <DateTitle>TO</DateTitle>
            <DateValue>{rentalPeriod.endDateFormatted !== rentalPeriod.startDateFormatted && rentalPeriod.endDateFormatted}</DateValue>
          </EndDateSection>
        </PeriodSection>
      </Header>

      <Main>
        <Calendar 
          // markedDates={{'2021-10-19': {disabled: true, disableTouchEvent: true} }} add disable, disableTouchEvent to disable dates already unavailable from api
          markedDates={markedDates}
          onDayPress={handleDayPress}
        />
      </Main>

      <Footer>
        <Button disabled={false} title="Confirm" onPress={handleConfirmation} />
      </Footer>
    </Container>
  )
}

export { Schedule, RentalPeriod }