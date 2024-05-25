import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieCard from '../movieCard';
import styles from './style';

/**
 * MoviesItem component
 */

const MoviesItem = (props) => {
    const { data, title, onMoviePress } = props;

    const renderItem = (item, index) => {
        return (
            <MovieCard
                index={index}
                movie={item}
                onMoviePress={onMoviePress}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) => renderItem(item, index)}
                horizontal
                bounces={false}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default MoviesItem;