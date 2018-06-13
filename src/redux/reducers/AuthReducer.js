import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGGED_IN_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  loggedIn: null
};

const WRONG_EMAIL = 'Zadaný nesprávny formát emailu.';
const WRONG_PASSWORD = 'Zadaný nesprávny email alebo heslo.';
const NO_INTERNET = 'Zadané nesprávne heslo.';
const NO_LOGIN = 'Prihlásenie neúspešné.';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL: {
      const { code } = action.payload;
      let error;
      switch (code) {
        case 'auth/invalid-email':
          error = WRONG_EMAIL;
          break;
        case 'auth/wrong-password':
          error = WRONG_PASSWORD;
          break;
        case 'auth/network-request-failed':
          error = NO_INTERNET;
          break;
        default:
          error = NO_LOGIN;
      }
      return { ...state, error, password: '', loading: false };
    }
    case LOGGED_IN_CHANGE: {
      const { usr, lgdIn } = action.payload;
      return { ...state, user: usr, loggedIn: lgdIn };
    }
    default:
      return state;
  }
};
