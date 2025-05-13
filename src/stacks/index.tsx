import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './Main';
import AuthStack from './Auth';
import { useInitProfile } from '../hooks/useInitProfile';
import { ROUTES } from './routes';

const Stack = createStackNavigator();

const AppStack = () => {
  const { userAuthenticated } = useInitProfile();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {userAuthenticated ? (
          <Stack.Screen name={ROUTES.MAIN_STACK} component={MainStack} />
        ) : (
          <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
