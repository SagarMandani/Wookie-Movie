import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * MovieCard style
 */

const styles = StyleSheet.create({
    container: {
        shadowColor: Colors.Black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
        marginRight: 10
    },
    title: {
        fontSize: 14,
        color: Colors.White,
        marginBottom: 5
    },
    imageStyle: {
        width: 150,
        height: 250,
        borderRadius: 5
    }
})

export default styles;