import {
  GET_SOCIAL_LINKS,
  PATCH_BASIC_INFO,
  PATCH_SOCIAL_LINKS,
  POST_EMPLOYEE_IDENTITY_ADHAR_DATA,
  POST_EMPLOYEE_IDENTITY_DL_DATA,
  POST_EMPLOYEE_IDENTITY_PAN_DATA,
  POST_EMPLOYEE_IDENTITY_PASSPORT_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_ADHAR_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_PASSPORT_DATA,
} from '../Type/ProfileTypes';
import {store} from './../Store/store';
import {
  GET_BASIC_INFO,
  GET_DOCUMENTATION,
  RETRIVE_EMPLOYEE_IDENTITY_PAN_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_DL_DATA,
} from './../Type/ProfileTypes';
import {AccessApi} from './../../globals/Api/index';
const EMPLOYE_ID = store.getState().Auth.Login?.employee_id;

//social links
//social links
//social links

export const getSocialLinks = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_url_data/${EMPLOYE_ID}/`,
      );
      await dispatch({
        type: GET_SOCIAL_LINKS,
        payload: Data.data,
      });
    } catch (err) {
      await console.log(err);
      await dispatch({
        type: GET_SOCIAL_LINKS,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};

export const patchSocialLinks = input => {
  return async dispatch => {
    try {
      const Data = await AccessApi.patch(
        `/api/accounts/update_employee_url_data/${EMPLOYE_ID}/`,
        input,
      );
      await dispatch({
        type: PATCH_SOCIAL_LINKS,
        payload: Data.data,
      });
    } catch (err) {
      await dispatch({
        type: PATCH_SOCIAL_LINKS,
        payload: {errormsg: 'Error', type: 'The linls is not valid!'},
      });
    }
  };
};

// BasicInformation
// BasicInformation
// BasicInformation
// BasicInformation

export const getBasicInformation = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_data/${EMPLOYE_ID}/`,
      );
      await dispatch({
        type: GET_BASIC_INFO,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: GET_BASIC_INFO,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};

export const patchBasicInfo = input => {
  return async dispatch => {
    try {
      const Data = await AccessApi.patch(
        `/api/accounts/update_employee_data/${EMPLOYE_ID}/`,
        input,
      );
      await dispatch({
        type: PATCH_BASIC_INFO,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: PATCH_BASIC_INFO,
        payload: {errormsg: 'Error', type: 'The information  is not valid!'},
      });
    }
  };
};

//   Docomentation
//   Docomentation
//   Docomentation
//   Docomentation

export const retrieve_employee_identity_pan_data = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_identity_pan_data/employee_identity_id/`,
      );
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_PAN_DATA,
        payload: Data.data,
      });
    } catch (err) {
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_PAN_DATA,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};
export const retrieve_employee_identity_adhar_data = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_identity_adhar_data/employee_identity_id/`,
      );
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_ADHAR_DATA,
        payload: Data.data,
      });
    } catch (err) {
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_ADHAR_DATA,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};

export const retrieve_employee_identity_dl_data = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_identity_dl_data/employee_identity_id/`,
      );
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_DL_DATA,
        payload: Data.data,
      });
    } catch (err) {
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_DL_DATA,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};
export const retrieve_employee_identity_passport_data = () => {
  return async dispatch => {
    try {
      const Data = await AccessApi.get(
        `/api/accounts/retrieve_employee_identity_passport_data/employee_identity_id/`,
      );
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_PASSPORT_DATA,
        payload: Data.data,
      });
    } catch (err) {
      await dispatch({
        type: RETRIVE_EMPLOYEE_IDENTITY_PASSPORT_DATA,
        payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
      });
    }
  };
};

export const post_employee_identity_adhar_data = input => {
  return async dispatch => {
    try {
      const Data = AccessApi.post(
        `/api/accounts/update_and_create_employee_identity_data/${EMPLOYE_ID}/`,
        input,
      );

      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_ADHAR_DATA,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_ADHAR_DATA,
        payload: {errmsg: 'error', type: 'information invalid!'},
      });
    }
  };
};

export const post_employee_identity_pan_data = input => {
  return async dispatch => {
    try {
      const Data = AccessApi.post(
        `/api/accounts/update_and_create_employee_identity_data/${EMPLOYE_ID}/`,
        input,
      );

      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_PAN_DATA,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_PAN_DATA,
        payload: {errmsg: 'error', type: 'information invalid!'},
      });
    }
  };
};

export const post_employee_identity_dl_data = input => {
  return async dispatch => {
    try {
      const Data = AccessApi.post(
        `/api/accounts/update_and_create_employee_identity_data/${EMPLOYE_ID}/`,
        input,
      );

      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_DL_DATA,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_DL_DATA,
        payload: {errmsg: 'error', type: 'information invalid!'},
      });
    }
  };
};

export const post_employee_identity_passport_data = input => {
  return async dispatch => {
    try {
      const Data = AccessApi.post(
        `/api/accounts/update_and_create_employee_identity_data/${EMPLOYE_ID}/`,
        input,
      );

      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_PASSPORT_DATA,
        payload: Data.data,
      });
    } catch (err) {
      console.log(err);
      await dispatch({
        type: POST_EMPLOYEE_IDENTITY_PASSPORT_DATA,
        payload: {errmsg: 'error', type: 'information invalid!'},
      });
    }
  };
};
