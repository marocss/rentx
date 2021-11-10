import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { useTheme } from 'styled-components';
import { AppStackRoutes } from './app.stack.routes';

// import { CarDTO } from '../dtos/CarDTO';
import { Home } from '../screens/Home';
// import { RentalPeriod } from '../screens/Schedule';
import { MyCars } from '../screens/MyCars';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';
import Profile from '../screens/Profile';

// interface SignUpStepTwoUserData {
//   name: string;
//   email: string;
//   driversLicense: string;
// }

// interface SuccessData {
//   title: string;
//   message: string;
//   nextScreenRoute: 'Home' | 'SignIn';
// }

// type RootStackParamList = {
//   Home: undefined;
//   Car: { car: CarDTO };
//   Schedule: { car: CarDTO };
//   ConfirmSchedule: { car: CarDTO, rentalPeriod: RentalPeriod };
//   Success: SuccessData;
//   MyCars: undefined;
//   SignIn: undefined;
//   SignUpStepOne: undefined;
//   SignUpStepTwo: { user: SignUpStepTwoUserData };
// };

// declare global {
//   // eslint-disable-next-line no-unused-vars
//   namespace ReactNavigation {
//     // eslint-disable-next-line no-unused-vars
//     interface RootParamList extends RootStackParamList {}
//   }
// }

const { Navigator, Screen } = createBottomTabNavigator();

export const AppTabRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 78,
          // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.background_one,
          alignContent: 'center',
        },
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_light,
      }}
    >
      <Screen
        name="HomeAppStack"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} color={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile} // update component later
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
