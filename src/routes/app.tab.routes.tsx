import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from './app.stack.routes';

import { CarDTO } from '../dtos/CarDTO';
import { Home } from '../screens/Home';
import { RentalPeriod } from '../screens/Schedule';
import { MyCars } from '../screens/MyCars';

interface SignUpStepTwoUserData {
  name: string;
  email: string;
  driversLicense: string;
}

interface SuccessData {
  title: string;
  message: string;
  nextScreenRoute: 'Home' | 'SignIn';
}

type RootStackParamList = {
  Home: undefined;
  Car: { car: CarDTO };
  Schedule: { car: CarDTO };
  ConfirmSchedule: { car: CarDTO, rentalPeriod: RentalPeriod };
  Success: SuccessData;
  MyCars: undefined;
  SignIn: undefined;
  SignUpStepOne: undefined;
  SignUpStepTwo: { user: SignUpStepTwoUserData };
};

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace ReactNavigation {
    // eslint-disable-next-line no-unused-vars
    interface RootParamList extends RootStackParamList {}
  }
}

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
      <Screen
        name="Profile"
        component={Home} // update component later
      />
    </Navigator>
  );
};
