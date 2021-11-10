import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarDTO } from '../dtos/CarDTO';
import { Car } from '../screens/Car';
import { Success } from '../screens/Success';
import { ConfirmSchedule } from '../screens/ConfirmSchedule';
import { Home } from '../screens/Home';
import { RentalPeriod, Schedule } from '../screens/Schedule';
import { MyCars } from '../screens/MyCars';
// import { Splash } from '../screens/Splash';
// import { SignIn } from '../screens/SignIn';
// import { CalendarMarkedDatesProps } from '../components/Calendar';
// import SignUpStepOne from '../screens/SignUp/SignUpStepOne';
// import SignUpStepTwo from '../screens/SignUp/SignUpStepTwo';

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

export const AppStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      {/* <Screen
        name="Splash"
        component={Splash}
      /> */}
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
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
        name="Success"
        component={Success}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
};
