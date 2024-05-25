import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Home screen style
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    headerTitle: {
        alignSelf: 'center',
        width: 120,
        fontSize: 30,
        marginTop: 10,
        color: Colors.Black,
        fontWeight: '500',
    },
    listStyle: {
        marginBottom: 10
    }
})

export default styles;