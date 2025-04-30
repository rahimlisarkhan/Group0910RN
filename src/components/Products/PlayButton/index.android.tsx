import { View } from 'react-native';
import React from 'react';
import Button from '../../../ui/Button';
import LocalStorage from '../../../store/localStorage';

const PayButton = () => {
  const handPay = () => {
    // android...
    LocalStorage.setItem('method', 'card-google');
    handGoogle();
  };

  const handGoogle = () => {
    // android...
  };

  return (
    <View>
      <Button title="Google pay" onPress={handPay} />
    </View>
  );
};

export default PayButton;
