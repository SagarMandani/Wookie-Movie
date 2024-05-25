import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './style';

/**
 * MovieCard component
 */

const MovieCard = (props) => {
    const { index, movie, onMoviePress } = props;

    return (
        <TouchableOpacity key={index} style={styles.container} onPress={() => onMoviePress(movie)}>
            <Image
                source={{ uri: movie.poster }}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    );
};

export default MovieCard;