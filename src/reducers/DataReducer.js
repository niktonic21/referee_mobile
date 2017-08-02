import {
  FETCH_SUCCES
} from '../actions/types';

const INITIAL_STATE = {
    delegation: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUCCES: {
      return { ...state, delegation: action.payload}
    }
    default:
      return state;
  }
};
