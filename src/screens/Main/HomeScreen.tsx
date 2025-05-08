import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../ui/Button';

const HomeScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
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
  );
};

export default HomeScreen;
