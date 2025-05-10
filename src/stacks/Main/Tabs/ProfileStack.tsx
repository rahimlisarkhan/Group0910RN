import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../../screens/Main/Profile/ProfileScreen';
import ProfileInfoScreen from '../../../screens/Main/Profile/ProfileInfoScreen';
import { ROUTES } from '../../routes';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PROFILE}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.PROFILE_INFO} component={ProfileInfoScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
