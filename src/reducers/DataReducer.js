import {
  FETCH_SUCCES_DELEGAT,
  FETCH_SUCCES_DELEGATION,
} from '../actions/types';

const INITIAL_STATE = {
    delegation: null,
    delegat: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUCCES_DELEGATION: {
      return { ...state, delegation: action.payload };
    }
    case FETCH_SUCCES_DELEGAT: {
      return { ...state, delegat: action.payload };
    }
    default:
      return state;
  }
};
