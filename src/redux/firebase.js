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
const START_TIMESTAMP = '1496275200'; //Thursday, 01-Jun-17 00:00:00 UTC

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

export function syncFirebase(store) {
    offline.get('timestamp').then(timestamp => {
        const time = timestamp || START_TIMESTAMP;
        delegationRef.orderByChild('update').startAt(time.toString()).on('value', snapshot => {
            //delegationRef.on('value', snapshot => {
            if (store.getState().items.connected) {
                store.dispatch(timestampLoaded(Date.now()));
            }
            store.dispatch(addDelegSuccess(snapshot.val()));
        });

        refereesRef.orderByChild('update').startAt(time.toString()).on('value', snapshot => {
            store.dispatch(addRefereeSuccess(snapshot.val()));
        });
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
