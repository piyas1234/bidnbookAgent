import {
  CHANGE_PASSWORD,
  LOADING_USER,
  LOAD_ROLE_LIST,
  LOGIN_USER,
  SEND_MAIL,
  SIGNUP_OTP_MODAL,
  SIGNUP_OTP_VERIFY,
} from '../Type/AuthType';
import {LOGOUT_USER, SIGNUP_USER} from './../Type/AuthType';
import {removeValue} from './../AsyncStorage/index';
import {AUTH_DATA} from '../AsyncStorage/Keys';
import {successFlash, errorFlash} from './../../globals/Messages/index';

const initialState = {
  Login: {},
  LoginMsg: () => {},
  Logout: false,
  sendmail: {},
  changePass: {},
  SignUp: () => {},
  SignupModal: false,
  SignupOtpVerify: () => {},
  resFresh: {},
  account: {},
  roleList: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const newState = {
        ...state,
        Login: action.payload,
        LoginMsg:
          action.payload.type === 'err'
            ? errorFlash('Error', action.payload.msg)
            : successFlash('success', action.payload.msg),
      };

      return newState;
    }

    case LOADING_USER: {
      const newState = {
        ...state,
        Login: action.payload,
      };

      return newState;
    }
    case LOGOUT_USER: {
      removeValue(AUTH_DATA);
      const newState = {
        ...state,
        Login: action.payload,
        Logout: true,
      };

      return newState;
    }

    case SEND_MAIL: {
      const newState = {
        ...state,
        sendmail: action.payload,
      };

      return newState;
    }

    case CHANGE_PASSWORD: {
      const newState = {
        ...state,
        changePass: action.payload,
      };

      return newState;
    }

    case LOAD_ROLE_LIST: {
      const newState = {
        ...state,
        roleList: action.payload,
      };
      return newState;
    }

    case SIGNUP_USER: {
      const newState = {
        ...state,
        SignUp:
          action.payload.msg.slice(0, 6) === 'Please'
            ? successFlash('SignUp', action.payload.msg)
            : errorFlash('email already exit', action.payload.msg),
        SignupModal: action.payload.msg.slice(0, 6) === 'Please' ? true : false,
      };
      return newState;
    }
    case SIGNUP_OTP_VERIFY: {
      const newState = {
        ...state,
        SignupOtpVerify:
          action.payload === 'WRONG OTP'
            ? errorFlash(action.payload, 'You provide wrong otp or expired')
            : successFlash('Success', action.payload),
        SignupModal: action.payload === 'WRONG OTP' ? true : false,
      };
      return newState;
    }
    case SIGNUP_OTP_MODAL: {
      const newState = {
        ...state,
        SignupModal: action.payload,
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
