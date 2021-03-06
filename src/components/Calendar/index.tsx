import React from 'react';
import { Calendar as RNCalendar } from 'react-native-calendars';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
} from './styles';

interface CalendarArrowProps {
  direction: string;
}

interface CalendarMarkedDatesProps {
  [date: string]: {
    color?: string;
    textColor?: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  }
}

interface CalendarDayProps {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface CalendarProps {
  markedDates: CalendarMarkedDatesProps;
  // eslint-disable-next-line no-unused-vars
  onDayPress: (date: CalendarDayProps) => void;
}

// LocaleConfig.locales['pt-br'] = {
//   monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril',
// 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//   monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr',
// 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//   dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
//   dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
//   today: 'hoje',
// }
// LocaleConfig.locales['en-us'] = {
//   dayNamesShort: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
//   today: 'today',
// }

// LocaleConfig.defaultLocale = 'pt-br'

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();

  return (
    <Container>
      <RNCalendar
        renderArrow={(direction) => <CustomArrow direction={direction} />}
        headerStyle={{
          backgroundColor: theme.colors.background_two,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.line,
          paddingBottom: 10,
          marginBottom: 19,
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
            marginHorizontal: -15,
          },
        }}
        firstDay={1}
        minDate={new Date()}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
        disabledDaysIndexes={[15, 16, 17]}
      />
    </Container>
  );
};

const CustomArrow = ({ direction }: CalendarArrowProps) => {
  const theme = useTheme();
  const arrowColor = theme.colors.text;

  return (
    <Feather
      size={22}
      color={arrowColor}
      name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
    />
  );
};

export { Calendar, CalendarMarkedDatesProps, CalendarDayProps };
