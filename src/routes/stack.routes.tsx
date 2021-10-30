import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CarDTO } from '../dtos/CarDTO'
import { Car } from '../screens/Car';
import { CompletedSchedule } from '../screens/CompletedSchedule';
import { ConfirmSchedule } from '../screens/ConfirmSchedule';
import { Home } from '../screens/Home';
import { RentalPeriod, Schedule } from '../screens/Schedule';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
// import { CalendarMarkedDatesProps } from '../components/Calendar';

type RootStackParamList = {
  Home: undefined;
  Car: { car: CarDTO };
  Schedule: { car: CarDTO };
  ConfirmSchedule: { car: CarDTO, rentalPeriod: RentalPeriod };
  CompletedSchedule: undefined;
  MyCars: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Signin"}
    >
      
      <Screen 
        name={"Signin"}
        component={Signin}
      />
      {/* <Screen 
        name={"Splash"}
        component={Splash}
      /> */}
      <Screen 
        name={"Home"}
        component={Home}
        options={{
          gestureEnabled: false
        }}
      />
      <Screen 
        name={"Car"}
        component={Car}
        key={"car"}
      />
      <Screen 
        name={"Schedule"}
        component={Schedule}
      />
      <Screen 
        name={"ConfirmSchedule"}
        component={ConfirmSchedule}
      />
      <Screen 
        name={"CompletedSchedule"}
        component={CompletedSchedule}
      />
      <Screen 
        name={"MyCars"}
        component={MyCars}
      />
    </Navigator>
  )
}