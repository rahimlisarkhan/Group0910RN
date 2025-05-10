import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../../screens/Others/DetailsScreen';
import SignInScreen from '../../screens/Auth/SignInScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn"
        // options={{
        //   animation: 'slide_from_bottom',
        // }}
        // options={{
        //   presentation: 'modal',
        //   title: 'Detail Screen sehifesi',
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        // }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        // options={{
        //   presentation: 'modal',
        //   title: 'Detail Screen sehifesi',
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        // }}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Otp"
        // options={{
        //   presentation: 'modal',
        //   title: 'Detail Screen sehifesi',
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        // }}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
