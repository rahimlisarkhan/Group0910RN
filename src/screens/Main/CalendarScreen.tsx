import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';

const CalendarScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View>
      <AppHeader title="Calendar" />
      <View>
        <Text>Calendar Screen</Text>
      </View>
    </View>
  );
};

export default CalendarScreen;
