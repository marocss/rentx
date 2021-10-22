import React from 'react';
import { Button, Dimensions, StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import {
  Container,
} from './styles';

// interface SplashProps {
// }

const { width } = Dimensions.get('window')

export const Splash = () => {
  const animation = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ 
        translateX: withTiming(animation.value, {
          duration: 500,
          easing: Easing.bezier(1,.05,0,1.09)
        })
      }]
    }
  })
  
  const handleButton = () => {
    animation.value = Math.random() * ( width - 100)
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