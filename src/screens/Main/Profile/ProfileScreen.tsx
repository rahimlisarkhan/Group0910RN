import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import { ROUTES } from '../../../stacks/routes';

const ProfileScreen = () => {
  const { navigate } = useNavigation<any>();

  return (
    <View>
      <AppHeader title="Profile" />
      <View>
        <Text>Profile Screen</Text>

        <Text
          onPress={() => {
            navigate(ROUTES.PROFILE_INFO, {
              id: 1,
              name: 'John Doe',
              email: 'example@gmail.com',
            });
          }}
          style={{
            color: 'blue',
            textDecorationLine: 'underline',
          }}
        >
          Go to Profile Info
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
