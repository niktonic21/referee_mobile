import { profileEditable } from '../actions';

import store from '../store';

class SetRouter {

  profileEdit = () => {
      const profile = store.getState().profile;
      ///console.log('PROFILE', profile.editable);
      if (profile.editable === true) {
        console.log('PROFILE_1', profile.editable);
        store.dispatch(profileEditable(true, profile));
      } else if (profile.editable === false) {
        console.log('PROFILE_2', profile.editable);
        store.dispatch(profileEditable(false, profile));
      } else {
        console.log('PROFILE_3', profile.editable);
        store.dispatch(profileEditable(false, profile));
      }
   }
}

export default SetRouter;
