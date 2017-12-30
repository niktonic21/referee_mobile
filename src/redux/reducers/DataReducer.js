import {
    FETCH_SUCCES_DELEGAT,
    FETCH_SUCCES_DELEGATION,
    FETCH_ALL_DELEGATIONS,
    FILTER_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    delegation: null,
    delegations: null,
    delegat: [],
    filterValues: { liga: 'Liga', mesiac: 'Mesiac', rozhodca: 'Rozhodca' }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SUCCES_DELEGATION: {
            return { ...state, delegation: action.payload };
        }
        case FETCH_SUCCES_DELEGAT: {
            return { ...state, delegat: action.payload };
        }
        case FETCH_ALL_DELEGATIONS: {
            console.log('season2017');
            return { ...state, delegations: action.payload };
            //return { ...state };
        }
        case FILTER_CHANGED: {
            const { key, value } = action.payload;
            console.log('Filter', key, value);
            return { ...state, filterValues: { ...state.filterValues, [key]: value } };
        }
        default:
            return state;
    }
};
