import {clearAll, getData, removeValue} from '../AsyncStorage';
import {AUTH_DATA} from '../AsyncStorage/Keys';
import {
  CHANGE_PASSWORD,
  LOADING_USER,
  LOAD_ROLE_LIST,
  LOGIN_USER,
  LOGOUT_USER,
  REFRESH_TOKEN,
  SEND_MAIL,
  SIGNUP_OTP_VERIFY,
  SIGNUP_USER,
} from '../Type/AuthType';
import {Api} from './../../globals/Api/index';
import { storeData } from './../AsyncStorage/index';
import { SIGNUP_OTP_MODAL } from './../Type/AuthType';

export const LoginAction = input => {

  return async dispatch => {
    try {
      const Data = await Api.post('/api/accounts/login/', input);
      await storeData(AUTH_DATA, Data.data);
      console.log(Data.data);
      await dispatch({
        type: LOGIN_USER,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err)
      await dispatch({
        type: LOGIN_USER,
        payload: {msg:"Username or password is wrong!",type:"err"},
      });
    }
  };
};

export const loadAction = () => {

  return async dispatch => {
    try {
      const data = await getData(AUTH_DATA);
      console.log(data);
      await dispatch({
        type: LOADING_USER,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    try {
      await removeValue(AUTH_DATA);
      await clearAll()
      await dispatch({
        type: LOGOUT_USER,
        payload: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const SendMail = input => {
  return async dispatch => {
    try {
      const Data = await Api.post('/api/password_reset/', input);
      await dispatch({
        type: SEND_MAIL,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const ChangePassword = (token, input) => {
  console.log(token,input)
  return async dispatch => {
    try {
      const Data = await Api.post(`/api/password_reset/confirm/${token}/`, {new_password:input});
      console.log(Data)
      await dispatch({
        type: CHANGE_PASSWORD,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};


export const loadRolesList  = () => {
  return async dispatch => {
    try {
      const Data = await Api.get('/api/accounts/role-list/');
      await dispatch({
        type: LOAD_ROLE_LIST,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};





export const SignUpAction = input => {
  return async dispatch => {
    try {
      const Data = await Api.post('/api/accounts/signup/', input);
      console.log(Data)
      await dispatch({
        type: SIGNUP_USER,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};



export const SignUpOTPAction = otp => {
  return async dispatch => {
    try {
      const Data = await Api.post(`/api/accounts/signup_verify/${otp}/` );
      const asArray = Object.entries(Data.data);
      const filtered = asArray.filter(([key, value]) =>  value);
     console.log(filtered)
      await dispatch({
        type: SIGNUP_OTP_VERIFY,
        payload: filtered[0][1],
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type:SIGNUP_OTP_VERIFY,
        payload:"WRONG OTP"
      })
      
    }
  };
};


export const SignOTPModal = () => {
  return async dispatch => {
    try {
      await dispatch({
        type: SIGNUP_OTP_MODAL,
        payload:false,
      });
    } catch (err) {
      console.log(err);
    }
  };
};




export const refreshTokenAction = data => {
  return async dispatch => {
    try {
      const Data = await Api.post('/account/refresh/', data);
      await dispatch({
        type: REFRESH_TOKEN,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutAction = () => {
  return async dispatch => {
    try {

      await dispatch({
        type: LOGOUT_USER,
        payload: {auth: false},
      });
    } catch (err) {
      console.log(err);
    }
  };
};
