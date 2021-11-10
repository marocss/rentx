import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarDTO } from '../dtos/CarDTO';
import { Success } from '../screens/Success';
import { RentalPeriod } from '../screens/Schedule';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import SignUpStepOne from '../screens/SignUp/SignUpStepOne';
import SignUpStepTwo from '../screens/SignUp/SignUpStepTwo';

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

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUpStepOne"
        component={SignUpStepOne}
      />
      <Screen
        name="SignUpStepTwo"
        component={SignUpStepTwo}
      />
      <Screen
        name="Success"
        component={Success}
      />
    </Navigator>
  );
};
