import {
    FILTER_SWITCH
} from './types';

export const filter = (turn) => {
  return {
    type: FILTER_SWITCH,
    payload: turn
  };
};
