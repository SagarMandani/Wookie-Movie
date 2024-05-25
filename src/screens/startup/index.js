import React, { useEffect } from 'react'
import { View, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Icons, Constants } from '../../common';
import styles from './style';

/**
 * startup screen
 */

const Startup = (props) => {

    useEffect(() => {
        async function checkLogin() {     
            setTimeout(() => {
                props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: Constants.Screen.App }]
                    })
                );
            }, 2000);
        }
        checkLogin()
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.logoStyle} source={Icons.logo} />
        </View>
    );

};

export default Startup;