import { TOP_TV, POPULAR_TV, TV_AIRING_TODAY } from '../utils/Constants';

const INITIAL_STATE = {
    Toptv: [],
    PopularTv: [],
    AiringToday: []
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case TOP_TV:
            return { ...state, Toptv: action.payload};

        case POPULAR_TV:
            return { ...state, PopularTv: action.payload};
            
        case TV_AIRING_TODAY:
            return { ...state, AiringToday: action.payload};    
    
        default:
            return state;
    }
};