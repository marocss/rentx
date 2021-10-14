import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';


// interface LoadingProps {
// }

export const Loading = () => {
  const theme = useTheme()

  return (
    <ActivityIndicator 
      color={theme.colors.main}
      size="large"
      style={{ flex: 1 }}
    />
  )
}