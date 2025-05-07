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
import ProductForm from './ProductForm';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import DeleteModal from '../DeleteModal';

const Product = () => {
  // const { height, width } = Dimensions.get('window');

  const { width } = useWindowDimensions();

  const inputRef = React.useRef(null);

  const method = LocalStorage.getItem('method');

  const [open, setOpen] = React.useState(false);

  console.log('width', Platform.OS, width);

  console.log('method', method);

  const tapGesture = Gesture.Tap().onEnd(() => {
    console.log('Tapped!');
  });

  const longPressGesture = Gesture.LongPress()
    .minDuration(500)
    .onEnd((e) => {
      console.log(e); //? look params
      console.log('Long Pressed!');
      setOpen(true);
    });

  const swipeBottomToTop = Gesture.Fling()
    .direction(Directions.UP)
    .onStart((e) => {
      // console.log('swipeBottomToTop', e);
      inputRef.current?.focus();
    });

  const gesture = Gesture.Exclusive(
    swipeBottomToTop,
    longPressGesture,
    tapGesture
  );

  return (
    <GestureDetector gesture={gesture}>
      <KeyboardAvoidingView
        // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, padding: 10 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0} // Adjust based on your header height if any
      >
        <DeleteModal
          visible={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />

        {/* <ScrollView style={{
       padding: 10, paddingBottom: 100 }}> */}
        <HomeIcon width={24} height={24} color="green" />
        <ProductList />
        <ProductForm inputRef={inputRef} />
        <PayButton />
        {/* <ProductForm /> */}
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    </GestureDetector>
  );
};

export default Product;
