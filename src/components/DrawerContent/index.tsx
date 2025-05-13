import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { ROUTES } from '../../stacks/routes';

interface DrawerContentProps extends DrawerContentComponentProps {}

const navigationList = [
  {
    name: 'Me',
    route: ROUTES.HOME,
  },
  {
    name: 'Feed',
    route: 'Feed',
  },
  {
    name: 'Article',
    route: 'Article',
  },
];

const DrawerContent = (props: DrawerContentProps) => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>

      <View
        style={{
          gap: 12,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          marginTop: 12,
          paddingTop: 12,
        }}
      >
        {navigationList.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.name}
              style={{
                padding: 12,
                borderRadius: 8,
                backgroundColor:
                  index == props.state.index ? '#eee' : 'transparent',
              }}
              onPress={() => {
                props.navigation.navigate(item.route);
                props.navigation.closeDrawer();
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
