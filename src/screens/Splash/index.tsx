import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import {
  Container,
} from './styles';

// interface SplashProps {
// }

export const Splash = () => {
  const animation = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}]
    }
  })
  
  const handleButton = () => {
    animation.value += 10
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]}>

      </Animated.View>

      <Button title={"move"} onPress={handleButton} />
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'orange'
  }
})