import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../common';

const { width } = Dimensions.get('window')

/**
 * Common styles for Button Component
 */

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Primary,
        borderRadius: 30,
        height: 60,
        width: width - 40,
        justifyContent: 'center',
    },
    text: {
        color: Colors.White,
        fontSize: 14,
        textAlignVertical: 'center',
    },
});