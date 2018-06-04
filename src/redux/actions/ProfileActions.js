import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { refereesRef } from '../firebase';
import { PROFILE_UPDATE, PROFILE_EDITABLE } from './types';

export const profileUpdate = ({ prop, value }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

export const profileEditable = (edit, data) => {
  if (edit === true) {
    const { currentUser } = firebase.auth();
    console.log('falseeee', data);
    const { meno, rozhodca, liga, mesto, auto, email, id } = data;
    return dispatch => {
      firebase
        .database()
        .ref(`/referees/${currentUser.uid}`)
        .set({ meno, rozhodca, liga, mesto, auto, email })
        .then(dispatch({ type: PROFILE_EDITABLE, payload: { edit, data } }));
    };
  }
  console.log('treeeee', data);
  return {
    type: PROFILE_EDITABLE,
    payload: { edit, data }
  };
};

export const profileFetchData = () => {
  const { currentUser } = firebase.auth();
  const edit = null;
  console.log('FETHCHaaaa', currentUser.uid);
  return dispatch => {
    firebase.database().ref(`/referees/${currentUser.uid}`).on('value', snapshot => {
      const data = snapshot.val();
      if (!data) {
        console.log('FETHCHaaaa', data);
        firebase
          .database()
          .ref(`/referees/${currentUser.uid}`)
          .push({ meno: '', rozhodca: '', liga: '', mesto: '', auto: '', email: '' })
          .then(() => {
            console.log('DATA', snapshot.val());
            dispatch({ type: PROFILE_EDITABLE, payload: { edit, data } });
          });
      } else {
        console.log('FETHCHbbb', data);
        dispatch({ type: PROFILE_EDITABLE, payload: { edit, data } });
      }
    });
  };
};
