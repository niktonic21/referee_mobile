import firebase from 'firebase';
import { FILTER_CHANGED, FETCH_SUCCES_DELEGATION, FETCH_ALL_DELEGATIONS } from './types';
import { getDelegationList, getData, getDelegat } from '../../api/Observer';

export const filterChanged = (key, value) => {
    return {
        type: FILTER_CHANGED,
        payload: { key, value }
    };
};

export const getAllDelegation = () => {
    return dispatch => {
        firebase.database().ref('/seasons/20172018').on('value', snapshot => {
            const data = snapshot.val();
            dispatch({ type: FETCH_ALL_DELEGATIONS, payload: data });
        });
    };
};

export const getDelegation = id => {
    return dispatch => {
        getDelegationList(id).then(res => dispatch(setDelegation(res))).catch(error => {
            console.error(error);
        });
    };
};

const setDelegation = del => {
    return {
        type: FETCH_SUCCES_DELEGATION,
        payload: del
    };
};

const setDelegat = del => {
    return {
        type: FETCH_SUCCES_DELEGATION,
        payload: del
    };
};
