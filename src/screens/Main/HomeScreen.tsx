import {
  View,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles';
import { useAuthStore } from '../../store/auth/auth.store';
import { useShallow } from 'zustand/react/shallow';
import { FlashList } from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import { useEffect } from 'react';
import { ROUTES } from '../../stacks/routes';
import { Logout } from '../../assets/icons';
import { logout } from '../../utils/instance';

const HomeScreen = () => {
  const { navigate } = useNavigation<any>();

  const { getMovies, movies } = useAuthStore(
    useShallow((state) => ({
      getMovies: state.actions.getMovies,
      movies: state.movies,
    }))
  );

  useEffect(() => {
    getMovies();
  }, []);

  // const [refreshing, setRefreshing] = useState(false);

  // const handleRefresh = async () => {
  //   setRefreshing(true);
  //   await getMovies();
  //   setRefreshing(false);
  // };

  // useEffect(() => {
  //   handleRefresh();
  // }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.title}>Besteller Movies</Text>
        <TouchableOpacity onPress={logout}>
          <Logout color="#fff" />
        </TouchableOpacity>
      </View>

      <FlashList
        data={movies}
        numColumns={2}
        ListEmptyComponent={
          <View>
            <Text
              style={{
                color: colors.primary,
                fontSize: 22,
              }}
            >
              No Movies Found
            </Text>
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={getMovies}
            tintColor={colors.primary}
          />
        }
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate(ROUTES.DETAILS, { id: item.id })}
          >
            <FastImage
              resizeMode="cover"
              style={styles.image}
              source={{ uri: item.cover_url }}
            />
            <View style={styles.cardFooter}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.imdb}>{item.imdb}</Text>
            </View>
          </TouchableOpacity>
        )}
        estimatedItemSize={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    padding: 10,
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 100,
  },

  card: {
    width: '95%', // For spacing with gap
    height: 300,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  cardTitle: {
    color: '#fff',
    flex: 1,
    marginRight: 5,
  },
  imdb: {
    color: 'orange',
  },
});

export default HomeScreen;
