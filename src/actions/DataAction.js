
import {
  FILTER_CHANGED,
  FETCH_SUCCES_DELEGATION,
 } from './types';
import { getDelegationList, getData, getDelegat } from '../api/Observer';

export const fliterChanged = (key, value) => {
  return {
    type: FILTER_CHANGED,
    payload: { key, value }
  };
};

export const getAllDelegation = () => {
    let result = null;
    // getData().then(allInfo => {
    //             const urls = allInfo.map(url => getDelegat(url.delegacia));
    //              Promise
    //                 .all(urls)
    //                 .then(dat => { return result = dat; })
    //                 .catch((error) => { console.error(error); });
    //         });

        //console.log('HHH', result = []);
 return result;
};

export const getDelegation = id => {
  return (dispatch) => {
    getDelegationList(id).then(res => dispatch(setDelegation(res))).catch((error) => {
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
