import { Alert } from 'react-native';
import firebase from 'firebase';
import { profileUpdate } from '../redux/actions';
import { store } from '../../App';

class SetRouter {
  profileEdit = () => {
    const profile = store.getState().profile;
    if (profile.editable === true && firebase.auth().currentUser) {
      store.dispatch(profileUpdate({ prop: 'editable', value: false }));
    } else if (profile.editable === false && firebase.auth().currentUser) {
      store.dispatch(profileUpdate({ prop: 'editable', value: true }));
    } else {
      Alert.alert(
        'Najprv sa prihláste.',
        '',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: true }
      );
    }
  };
}

export default SetRouter;
