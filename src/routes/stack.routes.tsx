import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CarDTO } from '../dtos/CarDTO'
import { Car } from '../screens/Car';
import { CompletedSchedule } from '../screens/CompletedSchedule';
import { ConfirmSchedule } from '../screens/ConfirmSchedule';
import { Home } from '../screens/Home';
import { Schedule } from '../screens/Schedule';

type RootStackParamList = {
  Home: undefined;
  Car: { car: CarDTO };
  Schedule: undefined;
  ConfirmSchedule: undefined;
  CompletedSchedule: undefined;
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
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="Car"
        component={Car}
        key="car"
      />
      <Screen 
        name="Schedule"
        component={Schedule}
      />
      <Screen 
        name="ConfirmSchedule"
        component={ConfirmSchedule}
      />
      <Screen 
        name="CompletedSchedule"
        component={CompletedSchedule}
      />
    </Navigator>
  )
}