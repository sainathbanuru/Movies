import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import Statusbar from './src/components/statusbar';
import { statusBarColor } from './src/utils/colors';
import CurrentMovies from './src/components/Movies/CurrentMovies';
import TopMovies from './src/components/Movies/TopMovies';
import UpcomingMovies from './src/components/Movies/UpcomingMovies';
import TopRatedTV from './src/components/series/TopRatedTv';
import TopSeries from './src/components/series/TopSeries';
import TvAiringToday from './src/components/series/TvAiringToday';
import MoviesDetail from './src/components/Movies/MoviesDetail';
import Test from './src/components/Test';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduceres from './src/reducers';
import MainNavigator from './src/components/Navigation';



export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reduceres, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1, backgroundColor: '#ECEFF1'}}>
          {/* <Statusbar backgroundColor={statusBarColor}/> */}
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

