import offline from 'react-native-simple-store';
import { delegationRef, refereesRef } from '../firebase';
import {
    ADD_ITEM,
    ADD_DELEG_SUCCESS,
    ADD_REFEREE_SUCCESS,
    REMOVE_ITEM,
    REMOVE_ITEM_SUCCESS,
    OFFLINE_REFEREE_LOADED,
    OFFLINE_DELEG_LOADED,
    CONNECTION_OFFLINE,
    CONNECTION_CHECKING,
    CONNECTION_ONLINE,
    CONNECTION_CHECKED,
    TIMESTAMP_LOADED
} from './types';

export function addItem(title) {
    const id = Math.random().toString(36).substring(7);
    const itemRef = itemsRef.child(id);

    itemRef.set({
        id,
        title: title,
        time: new Date().getTime()
    });

    return {
        type: ADD_ITEM
    };
}

export function addDelegSuccess(delegData) {
    console.log('asdd_deleg');
    return {
        type: ADD_DELEG_SUCCESS,
        delegData
    };
}

export function addRefereeSuccess(refereeData) {
    return {
        type: ADD_REFEREE_SUCCESS,
        refereeData
    };
}

export function removeItem(id) {
    itemsRef.child(id).remove();

    return {
        type: REMOVE_ITEM
    };
}

export function removeItemSuccess(id) {
    return {
        type: REMOVE_ITEM_SUCCESS,
        id: id
    };
}

function offlineDelegLoaded(deleg) {
    return {
        type: OFFLINE_DELEG_LOADED,
        deleg
    };
}

export function timestampLoaded(timestamp) {
    console.log('timestampLoaded', timestamp);
    return {
        type: TIMESTAMP_LOADED,
        timestamp
    };
}

export function loadLastTimestamp() {
    return dispatch => {
        offline.get('timestamp').then(timestamp => {
            dispatch(timestampLoaded(timestamp));
        });
    };
}

export function loadOfflineDeleg() {
    console.log('load offline deleg');
    return dispatch => {
        offline.get('/seasons/20172018').then(deleg => {
            dispatch(offlineDelegLoaded(deleg || []));
        });
    };
}

function offlineRefereeLoaded(referee) {
    return {
        type: OFFLINE_REFEREE_LOADED,
        referee
    };
}

export function loadOfflineReferee() {
    console.log('load offline referee');
    return dispatch => {
        offline.get('/referees').then(referee => {
            dispatch(offlineRefereeLoaded(referee || []));
        });
    };
}

export function checkConnection() {
    return dispatch => {
        dispatch({ type: CONNECTION_CHECKING });
        setTimeout(() => dispatch({ type: CONNECTION_CHECKED }), 5000);
    };
}

export function goOnline() {
    return {
        type: CONNECTION_ONLINE
    };
}

export function goOffline() {
    return {
        type: CONNECTION_OFFLINE
    };
}
