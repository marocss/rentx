import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Car } from '../screens/Car';
import { Success } from '../screens/Success';
import { ConfirmSchedule } from '../screens/ConfirmSchedule';
import { Home } from '../screens/Home';
import { Schedule } from '../screens/Schedule';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
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
