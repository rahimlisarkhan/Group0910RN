import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#9b51e0',
  primaryVariant: '#3700b3',
  secondary: '#03dac6',
  secondaryVariant: '#018786',
  background: '#f6f6f6',
  surface: '#ffffff',
  error: '#b00020',
  onSecondary: '#000000',
  onBackground: '#121212',
  onSurface: '#000000',
};

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground,
  },
});
