import { PROFILE_UPDATE, PROFILE_EDITABLE, PROFILE_CLEAR } from '../actions/types';

const INITIAL_STATE = {
  meno: '',
  priezvisko: '',
  rozhodca: '',
  tituly: '',
  liga: '',
  mesto: '',
  auto: '',
  email: '',
  kategoria: 'A',
  created: false,
  editable: false
};

export default (state = INITIAL_STATE, action) => {
  if (!action.payload) {
    return { ...state };
  }
  switch (action.type) {
    case PROFILE_CLEAR:
      return { state: INITIAL_STATE };
    case PROFILE_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case PROFILE_EDITABLE: {
      const {
        meno,
        priezvisko,
        rozhodca,
        liga,
        mesto,
        auto,
        email,
        kategoria
      } = action.payload.data;
      return { ...state, meno, priezvisko, rozhodca, liga, mesto, auto, email, kategoria };
    }
    default:
      return state;
  }
};
