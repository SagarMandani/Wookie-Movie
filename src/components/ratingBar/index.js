import React from 'react';
import { View, Image } from 'react-native';
import { Icons } from '../../common';
import styles from './style';

/**
 * RatingBar component
 */

const RatingBar = (props) => {
    const { maxRating, selectRate, style, startStyle } = props;
    return (
        <View style={[styles.customRatingBarStyle, style]}>
            {maxRating.map((item, key) => {
                return (
                    <Image
                        key={key}
                        style={[styles.starImageStyle, startStyle]}
                        source={item <= selectRate ? Icons.starFilled : Icons.starCorner}
                    />
                );
            })}
        </View>
    );
};

export default RatingBar;