import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * MoviesItem style
 */

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        color: Colors.Black,
        fontWeight: '500',
        textTransform: 'capitalize',
        marginVertical: 5
    },
})

export default styles;