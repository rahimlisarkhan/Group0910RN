import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../../screens/Others/DetailsScreen';
import SignInScreen from '../../screens/Auth/SignInScreen';
import ScanScreen from '../../screens/Auth/ScanScreen';
import { Camera } from 'react-native-vision-camera';

const Stack = createStackNavigator();

const AuthStack = () => {
  const cameraPermission = Camera.getCameraPermissionStatus();
  const microphonePermission = Camera.getMicrophonePermissionStatus();

  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`
  );

  const showPermissionsPage =
    cameraPermission !== 'granted' || microphonePermission === 'not-determined';

  console.log('showPermissionsPage', showPermissionsPage);
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
      <Stack.Screen
        name="Scan"
        // options={{
        //   presentation: 'modal',
        //   title: 'Detail Screen sehifesi',
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: 'red',
        //   },
        // }}
        component={ScanScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
