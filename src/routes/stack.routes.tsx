import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home';
import { Car } from '../screens/Car';
import { Schedule } from '../screens/Schedule';
import { ConfirmSchedule } from '../screens/ConfirmSchedule';
import { CompletedSchedule } from '../screens/CompletedSchedule';
// import {
//   Container,
// } from './styles';

// interface routesProps {
// }
type RootStackParamList = {
  Home: undefined;
  Car: undefined;
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