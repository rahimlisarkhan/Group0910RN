import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../ui/Button';
import AppHeader from '../../components/AppHeader';

const HomeScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View>
      <AppHeader title="App logo" />
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="GoDetail"
          onPress={() =>
            navigate({
              name: 'Details',
              params: {
                id: 1,
                name: 'John doe',
              },
            })
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
