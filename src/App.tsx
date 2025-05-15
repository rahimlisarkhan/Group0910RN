import { SafeAreaView, StatusBar } from 'react-native';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppStack from './stacks';
import { globalStyle } from './styles';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
      <BottomSheetModalProvider>
        <AppStack />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}

export default gestureHandlerRootHOC(App);
