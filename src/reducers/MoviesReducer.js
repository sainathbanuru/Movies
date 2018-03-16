import { CURRENT_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../utils/Constants';


const INITIAL_STATE = {
    CurrentMovies: [],
    TopRatedMovies: [],
    UpcomingMovies: []
}
export default (state = INITIAL_STATE, action ) => {

    switch(action.type){
        
        case CURRENT_MOVIES:
            return { ...state, CurrentMovies: action.payload};

        case TOP_RATED_MOVIES:
            return { ...state, TopRatedMovies: action.payload};

        case UPCOMING_MOVIES:
            return {...state, UpcomingMovies: action.payload};
            
        default:
            return state;    
    }

};