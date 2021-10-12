import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Carousel } from '../../components/Carousel';
import { SpecificationCard } from '../../components/SpecificationCard';
import { Feather } from "@expo/vector-icons";
import speedSvg from '../../assets/speed.svg'
import accelerateSvg from '../../assets/acceleration.svg'
import forceSvf from '../../assets/force.svg'
import gasSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import {
  Container,
  Header,
  CarouselSection,
  Main,
  FirstSection,
  CarInfoSection,
  Brand,
  Name,
  RentInfoSection,
  Period,
  Price,
  SpecificationSection,
  Footer,
  ScheduleDateInfoSection,
  CalendarIconSection,
  PeriodSection,
  DateTitle,
  DateValue,
  PriceSection,
  PriceLabel,
  PriceDetailsSection,
  Instalments,
  Cost,
} from './styles';
import { Button } from '../../components/Button';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

// interface ConfirmScheduleProps {
// }

export const ConfirmSchedule = () => {
  const theme = useTheme()
  const { navigate } = useNavigation()

  const handleRentRequest = () => {
    navigate('CompletedSchedule')
  }


  const images = [
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
    'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b-700x465.png',
  ]


  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton />
      </Header>

      <CarouselSection>
        <Carousel imagesUrls={images} />
      </CarouselSection>

      <Main>
        <FirstSection>
          <CarInfoSection>
            <Brand>audi</Brand>
            <Name>RS 5 Coupe</Name>
          </CarInfoSection>

          <RentInfoSection>
            <Period>Daily</Period>
            <Price>$ 35</Price>

          </RentInfoSection>
        </FirstSection>

        <SpecificationSection>
          <SpecificationCard 
            name="155 mph"
            icon={speedSvg}
          />
          <SpecificationCard 
            name="3.7s"
            icon={accelerateSvg}
          />
          <SpecificationCard 
            name="444 HP"
            icon={forceSvf}
          />
          <SpecificationCard 
            name="Gas"
            icon={gasSvg}
          />
          <SpecificationCard 
            name="Automatic"
            icon={exchangeSvg}
          />
          <SpecificationCard 
            name="2 people"
            icon={peopleSvg}
          />
        </SpecificationSection>

        <ScheduleDateInfoSection>
          <CalendarIconSection>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.white}
            />
          </CalendarIconSection>

          <PeriodSection>
            <DateTitle>FROM</DateTitle>
            <DateValue>10/18/2021</DateValue>
          </PeriodSection>
          
          <Feather 
            name="chevron-right"
            size={RFValue(15)}
            color={theme.colors.text}
          />

          <PeriodSection>
            <DateTitle>TO</DateTitle>
            <DateValue>10/28/2021</DateValue>
          </PeriodSection>
        </ScheduleDateInfoSection>

        <PriceSection>
          <PriceLabel>TOTAL</PriceLabel>
          <PriceDetailsSection>
            <Instalments>$ 35 x3 days</Instalments>
            <Cost>$ {35 * 3}</Cost>
          </PriceDetailsSection>
        </PriceSection>
      </Main>

      <Footer>
        <Button title="Rent now" color={theme.colors.correct} onPress={handleRentRequest} />
      </Footer>
    </Container>
  )
}