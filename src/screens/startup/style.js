import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * startup screen style
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.White
    },
    logoStyle: {
        height: 120,
        width: 120,
    }
})

export default styles;