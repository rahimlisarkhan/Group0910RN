import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../../screens/Others/DetailsScreen';
import { TabStack } from './Tabs/TabStack';
import { ROUTES } from '../routes';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName={ROUTES.TAB_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.TAB_STACK} component={TabStack} />

      <Stack.Screen
        name="Details"
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
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Notify"
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

export default MainStack;
