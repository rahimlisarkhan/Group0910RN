import { View } from 'react-native';
import React from 'react';
import Button from '../../../ui/Button';
import LocalStorage from '../../../store/localStorage';

const PayButton = () => {
  const handPay = () => {
    console.log('ios');
    LocalStorage.setItem('method', 'card-apple');
    // 200 line....
  };

  return (
    <View>
      <Button
        // title={DEVICE.isIos ? 'Apple pay' : 'Google pay'}
        title="Apple pay"
        onPress={handPay}
      />
    </View>
  );
};

export default PayButton;
