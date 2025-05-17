import { View, Text, Image } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import ProductDetailSheet from '../../components/Sheets/ProductDetailSheet';
import Button from '../../ui/Button';

import FastImage from 'react-native-fast-image';

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
        <FastImage
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72cdiDjhUfzHZRil6UctpaoSNB5m45DC0zg&s',
            // headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Image
          width={100}
          height={100}
          resizeMode="cover"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72cdiDjhUfzHZRil6UctpaoSNB5m45DC0zg&s',
          }}
        />
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
