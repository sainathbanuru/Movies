import React from 'react';
import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import SeriesReducer from './SeriesReducer';
import SelectedMovie from './SelectedMovie';
import SelectedTv from './SelectedTv';

export default combineReducers({
    moviesReducer: MoviesReducer,
    selectedMovie: SelectedMovie,
    seriesReducer: SeriesReducer,
    selectedSeries: SelectedTv
});
