import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * RatingBar style
 */

const styles = StyleSheet.create({
    customRatingBarStyle: {
        flexDirection: 'row',
    },
    starImageStyle: {
        width: 20,
        height: 20,
        marginRight: 5,
        resizeMode: 'cover',
        tintColor: Colors.Orange
    },
});

export default styles;