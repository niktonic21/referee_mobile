import { initializeApp } from 'firebase';
import {
    addDelegSuccess,
    addRefereeSuccess,
    removeItemSuccess,
    goOnline,
    goOffline
} from './actions/ItemsActions';

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyDYFLQYIcPzj1j-J6hO87hPAOoyKb5TTH4',
    authDomain: 'referee-60959.firebaseapp.com',
    databaseURL: 'https://referee-60959.firebaseio.com',
    projectId: 'referee-60959',
    storageBucket: 'referee-60959.appspot.com',
    messagingSenderId: '881564158476'
});
export const delegationRef = firebaseApp.database().ref('/seasons/20172018');
export const refereesRef = firebaseApp.database().ref('/referees');
const connectedRef = firebaseApp.database().ref('.info/connected');

export function syncFirebase(store) {
    delegationRef.on('value', snapshot => {
        store.dispatch(addDelegSuccess(snapshot.val()));
    });

    refereesRef.on('value', snapshot => {
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
