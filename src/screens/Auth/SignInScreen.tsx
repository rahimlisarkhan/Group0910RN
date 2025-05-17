import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import Button from '../../ui/Button';

const SignInScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View>
        <Text>SignInScreen</Text>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" secureTextEntry />

        <View style={{ gap: 10, padding: 10 }}>
          <Button title="Sign In" onPress={() => {}} />
          <Button
            title="Scan"
            onPress={() => {
              navigate('Scan');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
