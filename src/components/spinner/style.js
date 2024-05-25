import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * Spinner style
 */

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BlackRGB(0.3),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    spinnerBox: {
        backgroundColor: '#00000099',
        alignItems: 'center',
        padding: 25,
        borderRadius: 10
    },
    spinnerText: {
        marginTop: 10,
        fontSize: 15
    },
    moreLoading: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gifStyle: {
        height: 40,
        width: 40
    },
    hotelBox: {
        backgroundColor: '#00000099',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    loaderStyle: {
        height: 20,
        width: 20
    },
    spinnerText: {
        marginTop: 10,
        color: Colors.White
    }
});

export default styles;
