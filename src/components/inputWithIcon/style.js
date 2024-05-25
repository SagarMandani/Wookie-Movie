/**
 * Common styles for TextBox Component
 */

import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    container2: {
        backgroundColor: Colors.White,
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 18,
        height: 18,
    },
    textInput: {
        flex: 1,
        color: Colors.Black,
        fontSize: 15,
    }
});