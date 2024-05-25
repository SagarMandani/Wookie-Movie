import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native';
import { Icons, Constants } from '../../common';
import { InputWithIcon, MovieCard, Spinner } from '../../components';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieReducer } from '../../redux/selectors';
import { requestSearchMovie } from '../../redux/actions';

/**
 * search movie screen
 */

const SearchMovie = (props) => {
    const dispatch = useDispatch();
    const movieState = useSelector(state => getMovieReducer(state));
    const { searchMovieData, searchMovieLoading } = movieState;
    const [moviesList, setMoviesList] = useState([]);
    const [movieSearchText, setMovieSearchText] = useState('');

    useEffect(() => {
        if (movieSearchText.length > 0) {
            setTimeout(() => {
                dispatch(requestSearchMovie(movieSearchText))
            }, 250);
        }
    }, [movieSearchText]);

    useEffect(() => {
        setMoviesList(searchMovieData);
    }, [searchMovieData])

    const onMoviePress = (item) => {
        props.navigation.navigate(Constants.Screen.MovieDetails, { movie: item })
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginBottom: 10 }}>
                <MovieCard
                    index={index}
                    movie={item}
                    onMoviePress={onMoviePress}
                />
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>SEARCH MOVIE</Text>
            <InputWithIcon
                leftIconUrl={Icons.search}
                leftIconStyle={{ height: 16, width: 16 }}
                autoCapitalize='none'
                autoFocus={false}
                placeholder='Search movie name'
                value={movieSearchText}
                onChange={(text) => setMovieSearchText(text)}
                containerStyle={styles.inputStyle}
            />
            <View style={styles.container}>
                <FlatList
                    data={moviesList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                    ListEmptyComponent={() => <Text style={styles.emptyText}>{movieSearchText.length > 0 ? 'Movie name not found. Please search for another movie' : 'START YOUR SEARCH'}</Text>}
                />
            </View>
        </View>
    );

};

export default SearchMovie;