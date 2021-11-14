import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Success } from '../screens/Success';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import SignUpStepOne from '../screens/SignUp/SignUpStepOne';
import SignUpStepTwo from '../screens/SignUp/SignUpStepTwo';

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
