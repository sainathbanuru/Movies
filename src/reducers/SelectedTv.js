import { SELECTED_SERIES } from '../utils/Constants';

export default (state = null, action) => {
    switch (action.type) {
      case SELECTED_SERIES:
          return action.payload;
      default:
        return state;
    }
  };