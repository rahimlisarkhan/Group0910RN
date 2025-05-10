import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';

const ProfileInfoScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View>
      <AppHeader title="Profile Information" />
      <View>
        <Text>Profile Info Screen</Text>
      </View>
    </View>
  );
};

export default ProfileInfoScreen;
