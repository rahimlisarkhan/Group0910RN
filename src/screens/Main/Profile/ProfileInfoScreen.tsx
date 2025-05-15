import {
  View,
  Text,
  TextInput,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import {
  Route,
  SceneMap,
  TabBar,
  TabBarItem,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';
import { pixelHorizontal } from '../../../utils/metrics';

const renderScene = SceneMap({
  first: FirstComponent,
  second: SecondComponent,
});

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
];

const ProfileInfoScreen = () => {
  // const { navigate } = useNavigation<any>();

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderBadge = useCallback((props: { route: Route }) => {
    const { route } = props;

    return (
      <View key={props.route.key}>
        <Text
          allowFontScaling={false}
          style={[{ fontSize: 12, color: 'black' }]}
        >
          {route.title}
        </Text>
      </View>
    );
  }, []);

  const renderTabBarItem = useCallback(
    (props: any) => {
      const { key, ...rest } = props;
      return (
        <TabBarItem
          // badge={renderBadge}
          key={key}
          {...rest}
          labelAllowFontScaling={false}
          labelStyle={[
            {
              fontSize: 14,
              color: 'black',
            },
          ]}
        >
          {props.route.title}
        </TabBarItem>
      );
    },
    [renderBadge]
  );

  const renderTabBar = useCallback(
    (props: TabBarProps<any>) => {
      return (
        <TabBar
          {...props}
          scrollEnabled
          activeColor={'red'}
          inactiveColor={'blue'}
          style={styles.tabBar}
          tabStyle={styles.tabStyle}
          renderTabBarItem={renderTabBarItem}
          indicatorStyle={styles.indicatorStyle}
        />
      );
    },
    [renderTabBarItem]
  );

  return (
    <View style={{ flex: 1 }}>
      <AppHeader title="Profile Information" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default ProfileInfoScreen;

function FirstComponent() {
  return (
    <View>
      <Text>First Component</Text>
      <View>
        <TextInput placeholder="Name" />
      </View>
    </View>
  );
}

function SecondComponent() {
  return (
    <View>
      <Text>Second Component</Text>
    </View>
  );
}

const styles = {
  tabBar: {
    backgroundColor: 'white',
  },

  tabStyle: {
    width: pixelHorizontal(180),
  } as ViewStyle,

  indicatorStyle: {
    backgroundColor: 'blue',
  },
};
