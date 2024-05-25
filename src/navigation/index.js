import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './appNavigator';
import { Constants } from '../common';
import { Startup } from '../screens';

const Stack = createNativeStackNavigator();

// root navigation
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Constants.Screen.Startup} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Constants.Screen.Startup} component={Startup} />
                <Stack.Screen name={Constants.Screen.App} component={AppNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator;                   