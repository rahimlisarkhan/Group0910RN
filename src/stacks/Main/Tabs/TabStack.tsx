import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/Main/HomeScreen';
import CalendarScreen from '../../../screens/Main/CalendarScreen';
import SearchScreen from '../../../screens/Main/SearchScreen';
import ProfileScreen from '../../../screens/Main/Profile/ProfileScreen';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, animation: 'shift' }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}
