import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from "styled-components";
import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
 } from "@expo-google-fonts/archivo";
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from "@expo-google-fonts/inter";

import { Home } from './src/screens/Home';
import { Car } from './src/screens/Car';
import { Schedule } from './src/screens/Schedule';
import { ConfirmSchedule } from './src/screens/ConfirmSchedule';

import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <ConfirmSchedule />
    </ThemeProvider>
  );
}