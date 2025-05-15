import { View, Text } from 'react-native';
import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Button from '../../ui/Button';
import AppHeader from '../../components/AppHeader';
import {
  DrawerContentComponentProps,
  useDrawerStatus,
} from '@react-navigation/drawer';
import TextAnimationFill from '../../components/TextAnimationFill';

const HomeScreen = ({ navigation }: DrawerContentComponentProps) => {
  const { navigate, dispatch } = useNavigation<any>();

  const a = useDrawerStatus();

  // const openDrawer = () => dispatch(DrawerActions.openDrawer());

  return (
    <View>
      <AppHeader
        title="App logo"
        rightElement={<Text>Menu</Text>}
        onPressRight={navigation.openDrawer}
        // onPressRight={openDrawer}
      />
      <View>
        <TextAnimationFill></TextAnimationFill>

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
