
import { SELECTED_MOVIE, SELECTED_SERIES } from '../utils/Constants';

export const select_movie = (movieId) => {
    return{
        type: SELECTED_MOVIE,
        payload: movieId
    };
};

export const selected_series = (seriesId) => {
    return{
        type: SELECTED_SERIES,
        payload: seriesId
    };
};

export const get_movies = (url, movieType) => {

    return(distatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => { 
                distatch({
                type: movieType,
                payload: responseJson['results']
            })})
            .catch((error) => console.log(error)); 
    }
}

export const get_series = (url , seriesType) => {

    return(distatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => { 
                distatch({
                type: seriesType,
                payload: responseJson['results']
            })})
            .catch((error) => console.log(error)); 
    }

}