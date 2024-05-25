import { Dimensions } from 'react-native';

const Constants = {
    Screen: {
        App: 'App',
        Startup: 'Startup',
        Home: 'Home',
        HomeStack: 'HomeStack',
        SearchMovie: 'SearchMovie',
        MovieStack: 'MovieStack',
        MovieDetails: 'MovieDetails',
        SearchMovieStack: 'SearchMovieStack'
    },
    Preferences: {
        User: 'user'
    },
    FontFamily: {
        // PoppinsBlack: 'Poppins-Black',
    },
    Ratio: {
        Width: Dimensions.get("screen").width,
        Height: Dimensions.get("screen").height
    }
}

export default Constants;
