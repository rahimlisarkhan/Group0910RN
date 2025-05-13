import { View, Text } from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <AppHeader
        title="App logo"
        rightElement={<Text>Menu</Text>}
        onPressRight={navigation.openDrawer}
      />
      <Text>FeedScreen</Text>
    </View>
  );
};

export default FeedScreen;
