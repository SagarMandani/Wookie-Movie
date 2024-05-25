import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * search movie screen style
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
    inputStyle: {
        borderRadius: 10,
        borderColor: '#3D3D3D',
        borderWidth: 1,
        height: 45,
        marginVertical: 15,
    },
    emptyText: {
        marginTop: 20,
        fontSize: 14,
        color: Colors.Black
    }
})

export default styles;