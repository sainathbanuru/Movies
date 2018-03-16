import { SELECTED_MOVIE } from '../utils/Constants';

export default (state = null, action) => {
    switch (action.type) {
      case SELECTED_MOVIE:
          return action.payload;
      default:
        return state;
    }
  };