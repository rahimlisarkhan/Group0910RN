import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../../screens/Main/HomeScreen';
import CalendarScreen from '../../../screens/Main/CalendarScreen';
import SearchScreen from '../../../screens/Main/SearchScreen';
import ProfileStack from './ProfileStack';
import { pixelFont, pixelVertical, pixelWidth } from '../../../utils/metrics';
import { HomeIcon } from '../../../assets/icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeStack } from '../../../screens/Main/Home';
import { ROUTES } from '../../routes';
import { TabScreenOptions } from '../../options';

const Tab = createBottomTabNavigator();

const TabButton = (
  props: {
    tabName: string;
    icon: any;
  } & BottomTabBarButtonProps
) => {
  const Icon = props.icon;

  const active = props['aria-selected'];

  return (
    <Pressable onPress={props.onPress} style={styles.tabButton}>
      {/* {accessibilityState?.selected && <View style={styles.tabLine} />} */}
      <View style={styles.iconContainer}>
        <Icon color={active ? 'red' : 'blue'} width={24} height={24} />
        {active && <Text style={styles.tabBarLabelStyle}>{props.tabName}</Text>}
      </View>
    </Pressable>
  );
};

export function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={TabScreenOptions}
      initialRouteName={ROUTES.HomeStack}
    >
      <Tab.Screen
        name={ROUTES.HomeStack}
        options={{
          tabBarButton: (props) => {
            return <TabButton {...props} tabName="Home" icon={HomeIcon} />;
          },
        }}
        // component={HomeScreen}
        component={HomeStack}
      />
      <Tab.Screen
        name="Calendar"
        options={{
          tabBarButton: (props) => {
            return <TabButton {...props} tabName="Calendar" icon={HomeIcon} />;
          },
        }}
        component={CalendarScreen}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarButton: (props) => {
            return <TabButton {...props} tabName="Search" icon={HomeIcon} />;
          },
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="ProfileStack"
        options={{
          tabBarButton: (props) => {
            return <TabButton {...props} tabName="Profile" icon={HomeIcon} />;
          },
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'yellow',
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    paddingTop: pixelVertical(5),
    fontSize: pixelFont(10),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    marginBottom: pixelVertical(5),
    backgroundColor: 'transparent',
  },
  iconContainer: {
    marginTop: pixelVertical(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLine: {
    position: 'absolute',
    height: 3,
    width: pixelWidth(48),
    backgroundColor: 'red',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
