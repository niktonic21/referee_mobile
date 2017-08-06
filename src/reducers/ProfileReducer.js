import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import _ from 'lodash';
import {
  PROFILE_UPDATE,
  PROFILE_EDITABLE,
  PROFILE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  meno: '',
  rozhodca: '',
  liga: '',
  mesto: '',
  auto: '',
  email: '',
  created: false,
  editable: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_CREATE:
      return { ...state, created: action.payload };
    case PROFILE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PROFILE_EDITABLE: {
      switch (action.payload.edit) {
        case true: {
          console.log('1111');
          const { meno, rozhodca, liga, mesto, auto, email } = action.payload.data;

           console.log('1asdsd');
           Actions.refresh({ rightTitle: 'Upravit' });
          return { ...state, meno, rozhodca, liga, mesto, auto, email, editable: false };
         }

        case false: {
          console.log(222222);
          Actions.refresh({ rightTitle: 'Ulozit' });
          return { ...state, editable: true };
          }

        default: {
          const profileData = _.map(action.payload.data, (val, uid) => {
            return { ...val, uid };
          });
          const edit = action.payload.edit;
          console.log('EDIR', action.payload, profileData);
          if (profileData[0]) {
            const { meno, rozhodca, liga, mesto, auto, email, uid } = profileData[0];
            return { ...state, meno, rozhodca, liga, mesto, auto, email, uid };
          }

          // const { currentUser } = firebase.auth();
          // firebase.database().ref(`/users/${currentUser.uid}/profile`)
          //    .push({ meno: '', rozhodca: '', liga: '', mesto: '', auto: '', email: '' });
          return { ...state, editable: edit };
        }
     } }
    default:
    return state;
  }
};
