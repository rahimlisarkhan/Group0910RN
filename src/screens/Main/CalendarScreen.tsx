import { View, Text } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import ProductDetailSheet from '../../components/Sheets/ProductDetailSheet';
import Button from '../../ui/Button';

const CalendarScreen = () => {
  const { navigate } = useNavigation<any>();

  const productRef = React.useRef<any>(null);

  const handleOpenSheet = useCallback(() => {
    productRef.current?.present();
  }, []);

  return (
    <View>
      <AppHeader title="Calendar" />
      <View>
        <Text>Calendar Screen</Text>
        <Button title="Product Detail" onPress={handleOpenSheet} />
      </View>

      <ProductDetailSheet sheetRef={productRef}>
        <View>
          <Text>Product Detail</Text>
          <Button
            title="Close"
            onPress={() => {
              productRef.current?.close();
            }}
          />
        </View>
      </ProductDetailSheet>
    </View>
  );
};

export default CalendarScreen;
