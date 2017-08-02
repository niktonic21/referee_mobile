import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGGED_IN_CHANGE,
  GET_DELEGATION,
  FETCH_SUCCES
 } from './types';
import { getDelegationList } from '../api/Observer';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
 return (dispatch) => {
   dispatch({ type: LOGIN_USER });
   firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
     .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
           .catch(() => loginUserFail(dispatch));
       });
  };
};

export const loggedInChange = (usr, lgdIn) => {
  return {
    type: LOGGED_IN_CHANGE,
    payload: { usr, lgdIn }
  };
};

export const getDelegation = id => {
  return (dispatch) => {
    getDelegationList(id).then(res => dispatch(setDelegation(res))).catch((error) => {
        console.error(error);
    });
  }
}

const setDelegation = del => {
  return {
    type: FETCH_SUCCES,
    payload: del
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  console.log('LOGIN OK');
  Actions.zapasy();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
