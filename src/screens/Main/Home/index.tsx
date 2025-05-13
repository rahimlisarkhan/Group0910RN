import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedScreen from '../../../screens/Others/FeedScreen';
import ArticleScreen from '../../../screens/Others/ArticleScreen';
import { ROUTES } from '../../../stacks/routes';
import HomeScreen from '../HomeScreen';
import DrawerContent from '../../../components/DrawerContent';
import { useEffect } from 'react';
import { DrawerScreenOptions } from '../../../stacks/options';

const Drawer = createDrawerNavigator();

export function HomeStack({ navigation }: any) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      e.preventDefault();
      console.log('clicked');

      navigation.navigate(ROUTES.HomeStack, {
        screen: ROUTES.HOME,
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Drawer.Navigator
      screenOptions={DrawerScreenOptions}
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName={ROUTES.HOME}
    >
      <Drawer.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  );
}
