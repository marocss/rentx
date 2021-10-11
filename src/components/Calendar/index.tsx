import React from 'react';
import { Feather } from '@expo/vector-icons'

import{ 
  Calendar as RNCalendar,
  LocaleConfig
} from 'react-native-calendars';

import {
  Container,
} from './styles';
import { useTheme } from 'styled-components';

// interface CalendarProps {
// }

interface CalendarArrowProps {
  direction: string;
}


// LocaleConfig.locales['pt-br'] = {
//   monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//   monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//   dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
//   dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
//   today: 'hoje',
// }
// LocaleConfig.locales['en-us'] = {
//   dayNamesShort: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
//   today: 'today',
// }
// LocaleConfig.defaultLocale = 'pt-br'

export const Calendar = () => {
  const theme = useTheme()

  return (
    <Container>
      <RNCalendar
        renderArrow={( direction ) => <CustomArrow direction={direction} />}
        headerStyle={{
          backgroundColor: theme.colors.background_two,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.line,
          paddingBottom: 10,
          marginBottom: 19
        }}
        theme={{
          textDayFontFamily: theme.fonts.primary_regular,
          textDayHeaderFontFamily: theme.fonts.primary_medium,
          textDayHeaderFontSize: 12,
          textMonthFontSize: 19,
          monthTextColor: theme.colors.title,
          textMonthFontFamily: theme.fonts.secondary_bold,
          textMonthFontWeight: 'bold',
          arrowStyle: {
            marginHorizontal: -15
          },
          
        }}
        firstDay={1}
        minDate={new Date()}
      />
    </Container>
  )
}


const CustomArrow = ({ direction }: CalendarArrowProps) => {
  const theme = useTheme()

  const arrowColor = theme.colors.text

  return (
    <Feather 
      size={22} 
      color={arrowColor}
      name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
    />
  )
}