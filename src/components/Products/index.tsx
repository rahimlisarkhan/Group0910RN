import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import ProductList from './ProductList';
import { HomeIcon } from '../../assets/icons';
import PayButton from './PlayButton';
import LocalStorage from '../../store/localStorage';

const Product = () => {
  // const { height, width } = Dimensions.get('window');

  const { width } = useWindowDimensions();

  const method = LocalStorage.getItem('method');

  console.log('width', Platform.OS, width);

  console.log('method', method);

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, padding: 10 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0} // Adjust based on your header height if any
    >
      {/* <ScrollView style={{
       padding: 10, paddingBottom: 100 }}> */}
      <HomeIcon width={24} height={24} color="green" />
      <ProductList />
      <PayButton />
      {/* <ProductForm /> */}
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

export default Product;
