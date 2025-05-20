import { View, Text } from 'react-native';
import React from 'react';
import { ScanCamera } from '../../components/ScanCamera';

const ScanScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScanCamera />
    </View>
  );
};

export default ScanScreen;
