import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../ui/Button';
import AppHeader from '../../components/AppHeader';

const DetailsScreen = () => {
  const options = useRoute<any>();
  const { goBack, popToTop } = useNavigation<any>();

  console.log('options', options);

  return (
    <View>
      <AppHeader title="Detail Screen" leftElement={<Text>Geri</Text>} />
      <Text>DetailsScreen:{options.params?.name}</Text>
      <Button title="Back" onPress={() => goBack()} />
      {/* <Button title="Back" onPress={() => popToTop()} /> */}
    </View>
  );
};

export default DetailsScreen;
