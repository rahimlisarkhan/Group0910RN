import React, { useEffect } from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppStack from './stacks';
import { globalStyle } from './styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
      <AppStack />
    </SafeAreaView>
  );
}

export default gestureHandlerRootHOC(App);
