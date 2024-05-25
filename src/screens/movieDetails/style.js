import { StyleSheet } from 'react-native';
import { Colors } from '../../common';

/**
 * movie details screen style
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White
    },
    flexOne: {
        flex: 1,
    },
    logoStyle: {
        height: 120,
        width: 120,
    },
    backView: {
        position: 'absolute',
        top: 5,
        left: 5,
        padding: 10,
        zIndex: 1
    },
    backImg: {
        height: 25,
        width: 25,
        tintColor: Colors.White,
    },
    imgBg: {
        width: '100%',
        height: 200
    },
    starView: {
        top: 30,
    },
    movieTitle: {
        color: Colors.White,
        marginLeft: 45,
        marginBottom: 5,
        width: 50,
        fontSize: 18
    },
    mImg: {
        width: 80,
        height: 100,
        overflow: 'hidden',
        marginLeft: 15,
        marginTop: 150
    },
    sectionTitle: {
        marginTop: 10,
        color: Colors.Black,
        fontSize: 16
    },
    sectionDes: {
        color: '#8a8ea8',
        fontSize: 16
    },
    title: {
        fontSize: 18,
        color: Colors.White,
    },
    movieImageView: {
        position: 'absolute'
    },
    movieDesView: {
        top: -85,
        left: 110
    },
    subView: {
        paddingHorizontal: 15,
        marginTop: 60
    },
    mInfoText: {
        color: Colors.Black,
        fontSize: 18
    },
    lineStyle: {
        marginHorizontal: 10,
        fontSize: 15
    },
    heartView: {
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 10,
        zIndex: 1
    },
    favImg: {
        width: 25,
        height: 25,
        overflow: 'hidden',
        tintColor: Colors.Red
    },
})

export default styles;