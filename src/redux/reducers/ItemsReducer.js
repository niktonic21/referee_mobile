import _ from 'lodash';
import {
  ADD_DELEG_SUCCESS,
  ADD_REFEREE_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  OFFLINE_REFEREE_LOADED,
  OFFLINE_DELEG_LOADED,
  CONNECTION_CHECKING,
  CONNECTION_CHECKED,
  CONNECTION_ONLINE,
  CONNECTION_OFFLINE,
  TIMESTAMP_LOADED
} from '../actions/types';

const initialState = {
  delegList: [],
  refereeList: [],
  //offlineDelegList: [],
  //onlineRefereeList: [],
  //offlineRefereeList: [],
  timestamp: '1496275200000', //Thursday, 01-Jun-17 00:00:00 UTC,
  connectionChecked: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DELEG_SUCCESS: {
      let arr = [];
      if (action.delegData) {
        arr = _.unionBy(Object.values(action.delegData), Object.values(state.delegList), 'cislo');
      } else {
        arr = Object.values(state.delegList);
      }
      const deleg = _.sortBy(arr, [o => parseInt(o.cislo, 10)]);
      return {
        ...state,
        delegList: deleg
      };
    }
    case ADD_REFEREE_SUCCESS: {
      let arr = [];
      if (action.refereeData) {
        arr = _.unionBy(Object.values(action.refereeData), Object.values(state.refereeList), 'id');
      } else {
        arr = Object.values(state.refereeList);
      }
      const refs = _.sortBy(arr, 'id');
      return {
        ...state,
        refereeList: refs
      };
    }
    // case REMOVE_ITEM_SUCCESS: {
    //   list = state.onlineList.slice(0);
    //   const index = list.map(i => i.id).indexOf(action.id);
    //   list.splice(index, 1);

    //   return {
    //     ...state,
    //     onlineList: list,
    //     offlineList: list
    //   };
    // }
    // case OFFLINE_DELEG_LOADED:
    //   return {
    //     ...state,
    //     offlineDelegList: action.deleg,
    //     offlineDelegLoaded: true
    //   };
    // case OFFLINE_REFEREE_LOADED:
    //   return {
    //     ...state,
    //     offlineRefereeList: action.referee,
    //     offlineRefereeLoaded: true
    //   };
    case TIMESTAMP_LOADED:
      console.log('reducer_time_loaded', action.timestamp);
      return {
        ...state,
        timestamp: action.timestamp
      };

    //INTERNET CONNECTION-----------------------------------------

    case CONNECTION_CHECKING:
      return {
        ...state,
        connectionChecked: false
      };
    case CONNECTION_CHECKED:
      return {
        ...state,
        connectionChecked: true
      };
    case CONNECTION_ONLINE:
      return {
        ...state,
        connectionChecked: true,
        connected: true
      };
    case CONNECTION_OFFLINE:
      return {
        ...state,
        connectionChecked: true,
        connected: false
      };
    default:
      return state;
  }
}
