import { View, Text } from 'react-native';
import React from 'react';
import { ScanCamera } from '../../components/ScanCamera';

const ScanScreen = () => {
  return (
    <View>
      <ScanCamera />
      <Text>ScanScreen</Text>
    </View>
  );
};

export default ScanScreen;
