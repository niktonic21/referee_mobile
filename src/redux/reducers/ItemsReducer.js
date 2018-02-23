import {
    ADD_DELEG_SUCCESS,
    ADD_REFEREE_SUCCESS,
    REMOVE_ITEM_SUCCESS,
    OFFLINE_REFEREE_LOADED,
    OFFLINE_DELEG_LOADED,
    CONNECTION_CHECKING,
    CONNECTION_CHECKED,
    CONNECTION_ONLINE,
    CONNECTION_OFFLINE
} from '../actions/types';

const initialState = {
    onlineDelegList: [],
    offlineDelegList: [],
    onlineRefereeList: [],
    offlineRefereeList: [],
    connectionChecked: false
};

export default function reducer(state = initialState, action) {
    let list;
    switch (action.type) {
        case ADD_DELEG_SUCCESS:
            //list = state.offlineDelegList.concat(action.delegData);
            return {
                ...state,
                onlineDelegList: action.delegData,
                offlineDelegList: action.delegData
            };
        case ADD_REFEREE_SUCCESS:
            //list = state.onlineList.concat([action.itemData]).sort((a, b) => b.time - a.time);
            return {
                ...state,
                onlineRefereeList: action.refereeData,
                offlineRefereeList: action.refereeData
            };
        case REMOVE_ITEM_SUCCESS: {
            list = state.onlineList.slice(0);
            const index = list.map(i => i.id).indexOf(action.id);
            list.splice(index, 1);

            return {
                ...state,
                onlineList: list,
                offlineList: list
            };
        }
        case OFFLINE_DELEG_LOADED:
            return {
                ...state,
                offlineDelegList: action.deleg,
                offlineDelegLoaded: true
            };
        case OFFLINE_REFEREE_LOADED:
            return {
                ...state,
                offlineRefereeList: action.referee,
                offlineRefereeLoaded: true
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
