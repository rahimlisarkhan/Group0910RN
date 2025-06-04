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
import { useEffect, useState } from 'react';
import { ROUTES } from '../../stacks/routes';
import { Logout } from '../../assets/icons';
import { logout } from '../../utils/instance';
import { DevSettings } from 'react-native';

import {
  createData,
  getAllData,
  getDataById,
} from '../../utils/firestoreUtils';
import { pixelHorizontal, pixelVertical } from '../../utils/metrics';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';
import LocalStorage from '../../store/localStorage';

const HomeScreen = () => {
  const { navigate } = useNavigation<any>();

  const { t, i18n } = useTranslation();

  const [data, setData] = useState<any[]>([]);

  const { getMovies, movies } = useAuthStore(
    useShallow((state) => ({
      getMovies: state.actions.getMovies,
      movies: state.movies,
    }))
  );

  const changeLanguage = async (locale: 'az' | 'en') => {
    i18n.changeLanguage(locale);
    LocalStorage.setItem('localization', locale);
    DevSettings.reload();
  };

  console.log('movies', movies);

  const handleCreateData = () => {
    const randomId = Math.random().toString(36).substring(2, 15);
    const randomPrice = (Math.random() * 100).toFixed(2);

    const payload = {
      img_url:
        'https://images.pexels.com/photos/12715153/pexels-photo-12715153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Sample Product ' + randomId,
      price: randomPrice,
      description: 'This is a sample product description.',
    };

    createData('products', payload)
      .then((data) => {
        console.log('Created Product:', data);
        setData((prevData) => [...prevData, data]);
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

  useEffect(() => {
    // getMovies();
    getAllData('products').then((products) => {
      console.log('Products:', products);

      setData(products);
    });

    // createData('products', {
    //   name: 'Sample Product',
    //   price: 19.99,
    //   description: 'This is a sample product description.',
    // })
    //   .then((data) => {
    //     console.log('Created Product:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error creating product:', error);
    //   });
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
        <Text style={styles.title}>Besteller Movies {t('go_back')}</Text>
        <Button
          title="Add Data"
          onPress={handleCreateData}
          color={colors.primary}
        />

        <TouchableOpacity onPress={logout}>
          <Logout color="#fff" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text style={{ color: '#fff' }}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('az')}>
          <Text style={{ color: '#fff' }}>AZ</Text>
        </TouchableOpacity>
      </View>

      <FlashList
        data={data}
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
              source={{
                uri: item.img_url,
              }}
            />
            <View style={styles.cardFooter}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.imdb}>{item.price}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.description}</Text>
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
    paddingVertical: pixelVertical(20),
    paddingHorizontal: pixelHorizontal(16),
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
