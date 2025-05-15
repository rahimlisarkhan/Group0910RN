import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

export default function TextAnimationFill() {
  const opacity = useSharedValue(1); // start fully visible

  useEffect(() => {
    // Repeat fade in and out forever
    opacity.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 1000 }), // fade out
        withTiming(1, { duration: 1000 }) // fade in
      ),
      0, // -1 means infinite
      false // don't reverse the full sequence
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.Text style={[styles.text, animatedStyle]}>
      Hello, Students!
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: 'green',
  },
});
