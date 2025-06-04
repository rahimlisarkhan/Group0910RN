import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../ui/Button';
import { colors } from '../../styles'; // adjust if your theme exports differently
import { useAuthStore } from '../../store/auth/auth.store';
import { useShallow } from 'zustand/react/shallow';
import FastImage from 'react-native-fast-image';
import { getDataById } from '../../utils/firestoreUtils';

const MovieDetailsScreen = () => {
  const { goBack } = useNavigation<any>();
  const options = useRoute<any>();

  const [data, setData] = React.useState<any>();

  // Retrieve movie data and action from the store.
  const { movie, getMovie } = useAuthStore(
    useShallow((state) => ({
      movie: state.movie,
      getMovie: state.actions.getMovie,
    }))
  );

  const movieId = options.params?.id;

  useEffect(() => {
    if (movieId) {
      // getMovie(movieId);

      getDataById('products', movieId).then((product) => {
        console.log('Product by ID:', product);
        setData(product);
      });
    }
  }, [movieId]);

  // In case movie data is not available, you might want to show a loading state.
  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading movie details...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverWrapper}>
        <FastImage
          source={{ uri: data.img_url }}
          resizeMode="cover"
          style={styles.coverImage}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.rating}>{data.price}</Text>
        <Text style={styles.overview}>{data.description}</Text>

        <View style={styles.buttonWrapper}>
          <Button title="Back" onPress={goBack} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onBackground,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.onBackground,
  },
  loadingText: {
    fontSize: 24,
    color: '#fff',
  },
  coverWrapper: {
    width: '100%',
    height: 250,
    backgroundColor: 'gray',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 22,
    marginVertical: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginVertical: 22,
  },
  infoLabel: {
    fontWeight: '600',
    fontSize: 16,
    color: '#fff',
    marginRight: 8,
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
  },
  actorsSection: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  actorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  actorInfo: {
    flex: 1,
  },
  actorName: {
    fontSize: 16,
    color: '#fff',
  },
  buttonWrapper: {
    marginTop: 16,
    alignItems: 'center',
  },
});
