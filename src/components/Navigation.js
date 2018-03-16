import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { CurrentMovies, TopMovies, UpcomingMovies, MoviesDetail } from './Movies';
import { TopRatedTV, TopSeries, TvAiringToday, SeriesDetail} from './series';
  
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