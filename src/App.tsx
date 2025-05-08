import React, { useEffect } from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import BootSplash from 'react-native-bootsplash';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppStack from './stacks';
import { globalStyle } from './styles';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
      <AppStack />
    </SafeAreaView>
  );
}

export default gestureHandlerRootHOC(App);
