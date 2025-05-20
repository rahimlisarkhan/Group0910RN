import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { colors } from '../../styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const Button = ({
  style,
  onPress,
  styleText,
  loading,
  disabled,
  title,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled}
      hitSlop={10}
    >
      <Text style={[styles.text, styleText]}>{loading ? '...' : title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
