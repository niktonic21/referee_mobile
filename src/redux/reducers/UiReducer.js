import {
    FILTER_SWITCH
} from '../actions/types';

const INITIAL_STATE = {
    filterSwitch: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_SWITCH: {
      return { ...state, filterSwitch: action.payload };
    }
    default:
      return state;
  }
};
