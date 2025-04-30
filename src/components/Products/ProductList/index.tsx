import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import { useGlobalContext } from '../../../provider/GlobalProvider';
import ProductForm from '../ProductForm';
import {
  pixelFont,
  pixelHeight,
  pixelHorizontal,
  pixelVertical,
  pixelWidth,
} from '../../../utils/metrics';
import { DEVICE } from '../../../constants';

interface ProductListRenderItem {
  item: { name: string; price: number; img: string };
}

const ProductList = () => {
  const state = useGlobalContext();
  console.log('state', state.products);

  console.log('pixelFont(16)', DEVICE.isIos, pixelFont(16));

  const renderItem = useCallback(
    ({ item }: ProductListRenderItem) => (
      <View style={styles.item}>
        <Image
          source={{ uri: item.img }}
          //   source={require('../../../assets/images/1.jpg')} //Static image
          style={styles.item_img}
          resizeMode="cover"
        />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    ),
    []
  );

  return (
    <FlatList
      data={state.products}
      //   data={[]}
      keyExtractor={(item, index) => item.name + index.toString()}
      renderItem={renderItem}
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={
        <View>
          <Text>Product List</Text>
          <Text>Category size {state.products.length}</Text>
        </View>
      }
      ListEmptyComponent={
        <View>
          <Text style={styles.text}>No products found</Text>
        </View>
      }
      ListFooterComponent={<ProductForm />}
      //   numColumns={2}
      //   horizontal
      //   pagingEnabled
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 10,
        flex: 1,
        paddingBottom: 200,
        // backgroundColor: 'white',
      }}
      //   style={{ padding: 10, backgroundColor: 'red' }}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  item: {
    marginVertical: pixelVertical(10),
    marginHorizontal: pixelHorizontal(10),
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },

  text: {
    fontSize: pixelFont(16),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  item_img: {
    width: pixelWidth(124),
    height: pixelHeight(124),
    borderRadius: 10,
  },
});

{
  /* {state.products.map((product, index) => (
          <View
            key={index}
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1,
              borderColor: 'black',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: product.img }}
              //   source={require('../../../assets/images/1.jpg')} //Static image
              style={{ width: 200, height: 200, borderRadius: 10 }}
              resizeMode="cover"
            />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </View>
        ))} */
}
