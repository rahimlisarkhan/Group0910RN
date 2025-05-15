import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

const SearchScreen = () => {
  const { navigate } = useNavigation<any>();

  const offset = useSharedValue({
    height: 0,
    opacity: 0,
  });

  const animateStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(offset.value.height, {
        duration: 300,
      }),
      opacity: withTiming(offset.value.opacity, {
        duration: 300,
      }),
    };
  });

  const handleOpenInfo = () => {
    offset.value = {
      height: offset.value.height ? 0 : 300,
      opacity: offset.value.opacity ? 0 : 1,
    };
  };

  return (
    <View>
      <AppHeader title="App logo" />

      <Text onPress={handleOpenInfo}>Search Info Screen</Text>
      <Animated.View style={[styles.content, animateStyle]}>
        <Text>Search Info</Text>
        <Text onPress={handleOpenInfo}>Close</Text>
      </Animated.View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti
          dolor, sed vitae eveniet saepe recusandae minus hic provident
          repudiandae ullam dignissimos minima tenetur! Officiis assumenda alias
          quia animi nihil.
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    height: 0,
    opacity: 0,
  },
});
