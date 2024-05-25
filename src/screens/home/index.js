import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';
import styles from './style';
import { MovieItem, Spinner } from '../../components';
import { Constants } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieReducer } from '../../redux/selectors';
import { requestGetMovie } from '../../redux/actions';
import { useFocusEffect } from '@react-navigation/native';

/**
 * Home screen
 */

const Home = (props) => {
  const dispatch = useDispatch();
  const movieState = useSelector(state => getMovieReducer(state));
  const { movieData, movieLoading } = movieState;
  const [moviesList, setMoviesList] = useState([]);
  const [movies, setMovies] = useState([
    {
      title: 'Action Movie',
      data: [{
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        classification: '13+',
        director: 'Christopher Nolan',
        genres: ['Action', 'Crime', 'Drama'],
        id: 'd6822b7b-48bb-4b78-ad5e-9ba04c517ec8',
        imdb_rating: 9.0,
        length: '2h 32min',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        poster:
          'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        released_on: '2008-07-16T00:00:00',
        slug: 'the-dark-knight-2008',
        title: 'The Dark Knight',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        cast: ['Anthony Gonzalez', 'Gael Garcia Bernal', 'Benjamin Bratt'],
        classification: '7+',
        director: ['Lee Unkrich', 'Adrian Molina'],
        genres: ['Animation', 'Adventure', 'Family'],
        id: '84b17b50-5c6b-4c00-a798-f83ddda0187d',
        imdb_rating: 8.4,
        length: '1h 45min',
        overview:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        poster:
          'https://wookie.codesubmit.io/static/posters/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        released_on: '2017-10-27T00:00:00',
        slug: 'coco-2017',
        title: 'Coco',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        cast: ['Anthony Gonzalez', 'Gael Garcia Bernal', 'Benjamin Bratt'],
        classification: '7+',
        director: ['Lee Unkrich', 'Adrian Molina'],
        genres: ['Animation', 'Adventure', 'Family'],
        id: '84b17b50-5c6b-4c00-a798-f83ddda0187d',
        imdb_rating: 8.4,
        length: '1h 45min',
        overview:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        poster:
          'https://wookie.codesubmit.io/static/posters/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        released_on: '2017-10-27T00:00:00',
        slug: 'coco-2017',
        title: 'Coco',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        classification: '18+',
        director: 'Martin Scorsese',
        genres: ['Crime', 'Drama'],
        id: '372702a0-3e49-4bf3-812a-0c241a8c5ac9',
        imdb_rating: 8.3,
        length: '1h 54min',
        overview:
          'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        poster:
          'https://wookie.codesubmit.io/static/posters/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        released_on: '1976-02-07T00:00:00',
        slug: 'taxi-driver-1976',
        title: 'Taxi Driver',
      }]
    },
    {
      title: 'Drama Movie',
      data: [{
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        cast: ['Anthony Gonzalez', 'Gael Garcia Bernal', 'Benjamin Bratt'],
        classification: '7+',
        director: ['Lee Unkrich', 'Adrian Molina'],
        genres: ['Animation', 'Adventure', 'Family'],
        id: '84b17b50-5c6b-4c00-a798-f83ddda0187d',
        imdb_rating: 8.4,
        length: '1h 45min',
        overview:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        poster:
          'https://wookie.codesubmit.io/static/posters/84b17b50-5c6b-4c00-a798-f83ddda0187d.jpg',
        released_on: '2017-10-27T00:00:00',
        slug: 'coco-2017',
        title: 'Coco',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        classification: '13+',
        director: 'Christopher Nolan',
        genres: ['Action', 'Crime', 'Drama'],
        id: 'd6822b7b-48bb-4b78-ad5e-9ba04c517ec8',
        imdb_rating: 9.0,
        length: '2h 32min',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        poster:
          'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        released_on: '2008-07-16T00:00:00',
        slug: 'the-dark-knight-2008',
        title: 'The Dark Knight',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        classification: '13+',
        director: 'Christopher Nolan',
        genres: ['Action', 'Crime', 'Drama'],
        id: 'd6822b7b-48bb-4b78-ad5e-9ba04c517ec8',
        imdb_rating: 9.0,
        length: '2h 32min',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        poster:
          'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        released_on: '2008-07-16T00:00:00',
        slug: 'the-dark-knight-2008',
        title: 'The Dark Knight',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        classification: '18+',
        director: 'Martin Scorsese',
        genres: ['Crime', 'Drama'],
        id: '372702a0-3e49-4bf3-812a-0c241a8c5ac9',
        imdb_rating: 8.3,
        length: '1h 54min',
        overview:
          'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        poster:
          'https://wookie.codesubmit.io/static/posters/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        released_on: '1976-02-07T00:00:00',
        slug: 'taxi-driver-1976',
        title: 'Taxi Driver',
      }]
    },
    {
      title: 'Adventure Movie',
      data: [{
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        classification: '18+',
        director: 'Martin Scorsese',
        genres: ['Crime', 'Drama'],
        id: '372702a0-3e49-4bf3-812a-0c241a8c5ac9',
        imdb_rating: 8.3,
        length: '1h 54min',
        overview:
          'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        poster:
          'https://wookie.codesubmit.io/static/posters/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        released_on: '1976-02-07T00:00:00',
        slug: 'taxi-driver-1976',
        title: 'Taxi Driver',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        classification: '13+',
        director: 'Christopher Nolan',
        genres: ['Action', 'Crime', 'Drama'],
        id: 'd6822b7b-48bb-4b78-ad5e-9ba04c517ec8',
        imdb_rating: 9.0,
        length: '2h 32min',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        poster:
          'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
        released_on: '2008-07-16T00:00:00',
        slug: 'the-dark-knight-2008',
        title: 'The Dark Knight',
      }, {
        backdrop:
          'https://wookie.codesubmit.io/static/backdrops/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        cast: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        classification: '18+',
        director: 'Martin Scorsese',
        genres: ['Crime', 'Drama'],
        id: '372702a0-3e49-4bf3-812a-0c241a8c5ac9',
        imdb_rating: 8.3,
        length: '1h 54min',
        overview:
          'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.',
        poster:
          'https://wookie.codesubmit.io/static/posters/372702a0-3e49-4bf3-812a-0c241a8c5ac9.jpg',
        released_on: '1976-02-07T00:00:00',
        slug: 'taxi-driver-1976',
        title: 'Taxi Driver',
      }]
    }
  ])

  useEffect(() => {
    dispatch(requestGetMovie(''))
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      let moviesData = []
      if (global.favMovie?.length > 0) {
        moviesData = [{ title: 'Trending Movie', data: movieData }, { title: 'Favorite Movie', data: global.favMovie }, ...movies]
      } else {
        moviesData = [{ title: 'Trending Movie', data: movieData }, ...movies]
      }
      setMoviesList(moviesData);
    }, [movieData, global.favMovie])
  );

  const onMoviePress = (item) => {
    props.navigation.navigate(Constants.Screen.MovieDetails, { movie: item })
  }

  const renderItem = ({ item, index }) => {
    return (
      <MovieItem
        index={index}
        data={item.data}
        title={item.title}
        onMoviePress={onMoviePress}
      />
    );
  };


  return (
    <View style={styles.container}>
      {movieLoading
        ? <Spinner />
        : <FlatList
          ListHeaderComponent={() => <Text style={styles.headerTitle}>WOOKIE MOVIES</Text>}
          data={moviesList}
          renderItem={renderItem}
          style={styles.listStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item, index) => index.toString()}
        />}
    </View>
  );

};

export default Home;