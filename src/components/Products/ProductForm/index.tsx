import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import Button from '../../../ui/Button';
import { useGlobalContext } from '../../../provider/GlobalProvider';

const ProductForm = () => {
  const { addProduct } = useGlobalContext();

  const [form, setForm] = useState({
    img: '',
    name: '',
    price: '',
  });

  const handleChange = (name: string, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.img || !form.name || !form.price) {
      Alert.alert('Please fill all fields');
      return;
    }
    if (isNaN(Number(form.price))) {
      Alert.alert('Price must be a number');
      return;
    }
    const newProduct = {
      img: form.img,
      name: form.name,
      price: Number(form.price),
    };

    console.log('newProduct', newProduct);
    addProduct(newProduct);

    // Add product to the global state
    // addProduct(newProduct);
    // Reset form
    // setForm({
    //   img: '',
    //   name: '',
    //   price: '',
    // });
  };

  return (
    <View style={styles.container}>
      <Text>Form</Text>
      <TextInput
        placeholder="Product Img"
        placeholderTextColor="gray"
        cursorColor="blue"
        onChangeText={(text) => handleChange('img', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Name"
        placeholderTextColor="gray"
        cursorColor="blue"
        onChangeText={(text) => handleChange('name', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Price"
        cursorColor="blue"
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange('price', text)}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 10,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
  },
});
