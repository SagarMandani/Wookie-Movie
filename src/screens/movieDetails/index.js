import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { RatingBar } from '../../components';
import styles from './style';
import { Icons } from '../../common';

/**
 * movie details screen
 */

export const MovieDetails = ({ route, navigation }) => {
  const [favMovie, setFavMovie] = useState(false);
  const [, setState] = useState({});
  const { movie } = route.params;
  const movieTitleWithRating = `${movie.title} (${movie.imdb_rating.toFixed(1)})`;

  useFocusEffect(
    React.useCallback(() => {
      let favMovies = global.favMovie?.filter(item => item?.id == movie?.id);
      setFavMovie(favMovies?.length > 0 ? true : false);
      setState({});
    }, [favMovie, movie, global.favMovie])
  );

  const onFavoriteMovie = () => {
    setFavMovie(!favMovie);
    let movieList = global.favMovie?.length > 0 ? global.favMovie : [];
    let isSameFav = movieList?.filter(item => item?.id == movie?.id);
    let favMovieData = []
    if (isSameFav.length > 0) {
      favMovieData = movieList?.filter(item => item?.id != movie?.id)
    } else {
      favMovieData = [...movieList, movie]
    }
    global.favMovie = favMovieData;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <ImageBackground source={{ uri: movie.backdrop }} style={styles.imgBg} />
          <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()} pointerEvents='none'>
            <Image source={Icons.back} style={styles.backImg} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartView} onPress={() => onFavoriteMovie()} pointerEvents='none'>
            <Image source={favMovie ? Icons.heartFill : Icons.heart} style={styles.favImg} />
          </TouchableOpacity>
          <View style={styles.movieImageView}>
            <Image source={{ uri: movie.poster }} style={styles.mImg} />
            <View style={styles.movieDesView}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{movieTitleWithRating}</Text>
              <View style={styles.starView}>
                <RatingBar maxRating={[1, 2, 3, 4, 5]} selectRate={Math.ceil(parseInt(movie.imdb_rating) / 2)} />
              </View>
            </View>
          </View>
          <ScrollView style={styles.subView} showsVerticalScrollIndicator={false}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={styles.mInfoText}>Year</Text>
              <Text style={styles.lineStyle}>|</Text>
              <Text style={styles.mInfoText}>Length</Text>
              <Text style={styles.lineStyle}>|</Text>
              <Text style={styles.mInfoText}>Director</Text>
            </ScrollView>
            <Text style={styles.sectionTitle}>Cast: <Text style={styles.sectionDes}> {movie?.cast.join(', ')}</Text></Text>
            <Text style={styles.sectionTitle}>Movie Description: <Text style={styles.sectionDes}> {movie?.overview}</Text></Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MovieDetails;