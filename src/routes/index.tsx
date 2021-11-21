import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { CarDTO } from '../dtos/CarDTO';
import { RentalPeriod } from '../screens/Schedule';
import { Car as CarModel } from '../database/model/Car';
import { Loading } from '../components/Loading';

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
  HomeAppStack: undefined;
  Car: { car: CarModel };
  Schedule: { car: CarModel };
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

export const Routes = () => {
  const { user, isLoading } = useAuth();

  // return (
  //   <NavigationContainer>
  //     { user.id ? (
  //       <AppTabRoutes />
  //     ) : (
  //       <AuthRoutes />
  //     )}
  //   </NavigationContainer>
  // );
  return (
    isLoading ? <Loading />
      : (
        <NavigationContainer>
          { user.id ? (
            <AppTabRoutes />
          ) : (
            <AuthRoutes />
          )}
        </NavigationContainer>
      )
  );
};
