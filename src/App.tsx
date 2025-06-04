import { SafeAreaView, StatusBar } from 'react-native';

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppStack from './stacks';
import { colors, globalStyle } from './styles';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import './locales/IMLocalize'; // Ensure localization is initialized

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.onBackground}
        translucent
      />
      <BottomSheetModalProvider>
        <AppStack />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}

export default gestureHandlerRootHOC(App);
