import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Constants, Colors, Icons } from '../common';
import { Home, SearchMovie, MovieDetails } from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MovieStack = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.Home} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.Home} component={Home} />
            <Stack.Screen name={Constants.Screen.MovieDetails} component={MovieDetails} />
        </Stack.Navigator>
    )
}

const SearchMovieStack = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.SearchMovie} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.SearchMovie} component={SearchMovie} />
            <Stack.Screen name={Constants.Screen.MovieDetails} component={MovieDetails} />
        </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
        <Tab.Navigator initialRouteName={Constants.Screen.MovieStack}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.Primary,
                tabBarInactiveTintColor: Colors.Black,
                tabBarLabelStyle: {
                    textAlign: 'center',
                    marginTop: Platform.OS == 'android' ? 0 : 15,
                    marginBottom: Platform.OS == 'android' ? 10 : 0
                },
                tabBarStyle: [
                    Platform.select({
                        android: { height: 70 },
                        ios: { padding: 15 },
                    })],
                tabBarItemStyle: {
                    alignItems: 'center',
                }
            }}
        >
            <Tab.Screen
                name={Constants.Screen.MovieStack} component={MovieStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={Icons.home} style={{ height: 25, width: 25, tintColor: color }} resizeMode='contain' />
                    )
                }}
            />
            <Tab.Screen
                name={Constants.Screen.SearchMovieStack} component={SearchMovieStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={Icons.search} style={{ height: 25, width: 25, tintColor: color }} resizeMode='contain' />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={Constants.Screen.HomeStack} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Constants.Screen.HomeStack} component={HomeStack} />
        </Stack.Navigator>
    )
}

export default AppNavigator;