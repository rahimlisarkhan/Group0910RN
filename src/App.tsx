import React, { useEffect } from 'react';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Product from './components/Products';
import { GlobalProvider } from './provider/GlobalProvider';
import BootSplash from 'react-native-bootsplash';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import TodoApp from './components/TodoApp';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GlobalProvider>
        <TodoApp />
        {/* <Product /> */}
      </GlobalProvider>
    </SafeAreaView>
  );
}

export default gestureHandlerRootHOC(App);
