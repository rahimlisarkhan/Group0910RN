import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';

const SearchScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View>
      <AppHeader title="App logo" />
      <View>
        <Text>Search Screen</Text>
      </View>
    </View>
  );
};

export default SearchScreen;
