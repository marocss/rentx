import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from './stack.routes';
// import {
//   Container,
// } from './styles';

// interface routesProps {
// }

export const Routes = () => {

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}