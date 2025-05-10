import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import Button from '../../ui/Button';

const SignInScreen = () => {
  return (
    <View>
      <View>
        <Text>SignInScreen</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" secureTextEntry />

        <Button title="Sign In" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SignInScreen;
