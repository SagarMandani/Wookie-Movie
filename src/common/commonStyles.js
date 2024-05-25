import { StyleSheet } from 'react-native';
import Colors from './colors';
import Constants from './constants';

// common style file
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    headerTitle: {
        fontSize: 16,
        color: Colors.Black,
        fontWeight: 'bold',
    },
    headerLeftView: {
        alignSelf: 'center',
        width: 40,
        marginLeft: 10
    },
    headerLeftIcon: {
        height: 25,
        width: 25,
        tintColor: Colors.Black
    },
    headerRightView: {
        width: 40,
        marginRight: 10,
    },
    backgroundPrimary: {
        backgroundColor: Colors.Primary
    },
    safeAreaColor: {
        backgroundColor: Colors.Primary
    },
    flexOne: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.Primary
    },
    centerAlign: {
        alignItems: 'center'
    },
    centerJustify: {
        justifyContent: 'center'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    rowDirection: {
        flexDirection: 'row',
        width: Constants.Ratio.Width - 40
    },
    shadow: {
        elevation: 5,
        shadowColor: Colors.Black,
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    flexGrow: {
        flexGrow: 1
    },
    flexRow: {
        flexDirection: 'row'
    }
});

export default styles;