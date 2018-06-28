import { initializeApp } from 'firebase';
import offline from 'react-native-simple-store';
import {
  addDelegSuccess,
  addRefereeSuccess,
  removeItemSuccess,
  goOnline,
  goOffline,
  timestampLoaded
} from './actions/ItemsActions';
import { store } from '../../App';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDYFLQYIcPzj1j-J6hO87hPAOoyKb5TTH4',
  authDomain: 'referee-60959.firebaseapp.com',
  databaseURL: 'https://referee-60959.firebaseio.com',
  projectId: 'referee-60959',
  storageBucket: 'referee-60959.appspot.com',
  messagingSenderId: '881564158476',
  persistence: true,
  debug: __DEV__ ? '*' : false
});
export const delegationRef = firebaseApp.database().ref('/seasons/20172018');
export const refereesRef = firebaseApp.database().ref('/referees');
const connectedRef = firebaseApp.database().ref('.info/connected');

export function syncFirebase() {
  const time = store.getState().items.timestamp;
  console.log('hhh_tos', typeof time);
  delegationRef.orderByChild('update').startAt(time.toString()).once('value', snapshot => {
    console.log('time', store.getState().items.timestamp, snapshot.val());

    //delegationRef.on('value', snapshot => {
    if (store.getState().items.connected) {
      store.dispatch(timestampLoaded(Date.now()));
    }
    store.dispatch(addDelegSuccess(snapshot.val()));
  });

  refereesRef.orderByChild('update').startAt(time.toString()).once('value', snapshot => {
    store.dispatch(addRefereeSuccess(snapshot.val()));
  });

  // itemsRef.on('child_removed', snapshot => {
  //     store.dispatch(removeItemSuccess(snapshot.val().id));
  // });

  connectedRef.on('value', snap => {
    if (snap.val() === true) {
      store.dispatch(goOnline());
    } else {
      store.dispatch(goOffline());
    }
  });
}
