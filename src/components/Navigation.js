import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import MyApp from './MyHomeScreen';
import CurrentMovies from './Movies/CurrentMovies';
import TopMovies from './Movies/TopMovies';
import UpcomingMovies from './Movies/UpcomingMovies';
import MoviesDetail from './Movies/MoviesDetail';
import TopRatedTV from './series/TopRatedTv';
import TopSeries from './series/TopSeries';
import TvAiringToday from './series/TvAiringToday';
import SeriesDetail from './series/SeriesDetail';
  
const current = StackNavigator({
    Home: { screen : CurrentMovies},
    moviesDetail: { screen: MoviesDetail}
});

const moviesTop = StackNavigator({
    topMovies: { screen: TopMovies },
    moviesDetail: { screen: MoviesDetail}
});
  
const moviesUpcoming = StackNavigator({
    upcomingMovies: { screen: UpcomingMovies},
    moviesDetail: { screen: MoviesDetail}
});

const tvTop = StackNavigator({
    topRatedTv: {screen: TopRatedTV},
    seriesDetail: { screen: SeriesDetail}
});

const popularTV = StackNavigator({
    popularTv: { screen: TopSeries},
    seriesDetail: { screen: SeriesDetail}
});

const airingToday = StackNavigator({
    airingToday: { screen: TvAiringToday},
    seriesDetail: { screen: SeriesDetail}
});

const MainNavigator = DrawerNavigator({
    Home: {screen: current},
    topMovies: { screen: moviesTop },
    upcomingMovies: { screen: moviesUpcoming},
    topRatedTv: {screen: tvTop},
    popularTv: { screen: popularTV},
    airingToday: { screen: airingToday}
  },{
    
    contentOptions:{
      labelStyle: {
        color: '#e91e63'
      }
    },
  });
  

export default MainNavigator;