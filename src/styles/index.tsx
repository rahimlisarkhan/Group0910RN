import { StyleSheet } from 'react-native';
import { pixelFont, pixelHorizontal } from '../utils/metrics';

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

export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  light: 'Poppins-Light',
  thin: 'Poppins-Thin',
  bold: 'Poppins-Bold',
};

export const sizes = {
  small: pixelFont(4),
  medium: pixelFont(8),
  large: pixelFont(12),
  xlarge: pixelFont(16),
  xxlarge: pixelFont(20),
  xxxlarge: pixelFont(24),
  xxxlarge2: pixelFont(32),
};

export const spacing = {
  small: pixelHorizontal(4),
  medium: pixelHorizontal(8),
  large: pixelHorizontal(12),
  xlarge: pixelHorizontal(16),
  xxlarge: pixelHorizontal(20),
  xxxlarge: pixelHorizontal(24),
  xxxlarge2: pixelHorizontal(32),
};

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground,
  },
});
