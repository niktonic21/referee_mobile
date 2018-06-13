import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { refereesRef } from '../firebase';
import { store } from '../../../App';
import { PROFILE_UPDATE, PROFILE_CLEAR, PROFILE_EDITABLE } from './types';

export const profileUpdate = ({ prop, value }) => {
  if (prop === 'editable' && value) {
    Actions.refresh({ rightTitle: 'Uložiť' });
  } else if (prop === 'editable' && !value) {
    saveData(store.getState().profile);
    Actions.refresh({ rightTitle: 'Upraviť' });
  }
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

const saveData = data => {
  const { currentUser } = firebase.auth();
  const { rozhodca, liga, mesto, auto, kategoria, email } = data;
  firebase
    .database()
    .ref(`/referees/${currentUser.uid}`)
    .update({ rozhodca, liga, mesto, auto, kategoria, email })
    .then(() => console.log('data_saved'));
};

export const clearProfile = () => {
  return {
    type: PROFILE_CLEAR
  };
};

export const profileFetchData = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`/referees/${currentUser.uid}`).on('value', snapshot => {
      const data = snapshot.val();
      console.log('FETHCH_profile', currentUser.uid, data);
      dispatch({ type: PROFILE_EDITABLE, payload: { data } });
    });
  };
};
