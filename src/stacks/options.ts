import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { pixelVertical } from '../utils/metrics';
import { DEVICE } from '../constants';
import { DrawerNavigationOptions } from '@react-navigation/drawer';

export const TabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  animation: 'shift',
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: '#8782ee',
  tabBarStyle: {
    height: pixelVertical(DEVICE.isIos ? 90 : 80),
    paddingTop: 10,
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#242629',
    // borderTopLeftRadius: 32,
    // borderTopRightRadius: 32,
  },
};

export const DrawerScreenOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerPosition: 'right',
  drawerType: 'front',

  drawerStyle: {
    backgroundColor: '#fff',
    width: '85%',
  },
};

export const TabBarButtonOptions: BottomTabNavigationOptions = {};
