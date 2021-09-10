import {errorFlash} from '../../globals/Messages';
import {
  GET_SOCIAL_LINKS,
  PATCH_SOCIAL_LINKS,
  GET_BASIC_INFO,
  PATCH_BASIC_INFO,
  RETRIVE_EMPLOYEE_IDENTITY_PAN_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_ADHAR_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_PASSPORT_DATA,
  RETRIVE_EMPLOYEE_IDENTITY_DL_DATA,
  POST_EMPLOYEE_IDENTITY_ADHAR_DATA,
  POST_EMPLOYEE_IDENTITY_PAN_DATA,
  POST_EMPLOYEE_IDENTITY_DL_DATA,
  POST_EMPLOYEE_IDENTITY_PASSPORT_DATA,
} from './../Type/ProfileTypes';
import {successFlash} from './../../globals/Messages/index';

const initialState = {
  SocialLinks: [],
  PatchSocialLinks: () => {},
  BasicInfo: [],
  PatchBasicInfo: [],
  PanData: [],
  AdarData: [],
  DlData: [],
  PassportData: [],
  PostAdarData: [],
  PostDLData: [],
  PostPanData: [],
  PostPassportData: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCIAL_LINKS: {
      const newState = {
        ...state,
        SocialLinks: action.payload,
      };

      return newState;
    }

    case PATCH_SOCIAL_LINKS: {
      const newState = {
        ...state,
        PatchSocialLinks: action.payload.errormsg
          ? errorFlash(action.payload.errormsg, action.payload.type)
          : successFlash('Success', 'Urls added successfully!'),
      };
      return newState;
    }

    case GET_BASIC_INFO: {
      const newState = {
        ...state,
        BasicInfo: action.payload,
      };

      return newState;
    }

    case PATCH_BASIC_INFO: {
      const newState = {
        ...state,
        PatchBasicInfo: action.payload.errormsg
          ? errorFlash(action.payload.errormsg, action.payload.type)
          : successFlash('Success', 'Information added successfully!'),
      };
      return newState;
    }

    case RETRIVE_EMPLOYEE_IDENTITY_PAN_DATA: {
      const newState = {
        ...state,
        PanData: action.payload,
      };
      return newState;
    }

    case RETRIVE_EMPLOYEE_IDENTITY_ADHAR_DATA: {
      const newState = {
        ...state,
        AdarData: action.payload,
      };
      return newState;
    }

    case RETRIVE_EMPLOYEE_IDENTITY_PASSPORT_DATA: {
      const newState = {
        ...state,
        PassportData: action.payload,
      };
      return newState;
    }

    case RETRIVE_EMPLOYEE_IDENTITY_DL_DATA: {
      const newState = {
        ...state,
        DlData: action.payload,
      };
      return newState;
    }

    case POST_EMPLOYEE_IDENTITY_ADHAR_DATA: {
      const newState = {
        ...state,
        PostAdarData: action.payload.errmsg
          ? errorFlash(action.payload.errmsg, action.payload.type)
          : successFlash('Success', 'Information added successfully!'),
      };
      return newState;
    }

    case POST_EMPLOYEE_IDENTITY_PAN_DATA: {
      const newState = {
        ...state,
        PostPanData: action.payload.errmsg
          ? errorFlash(action.payload.errmsg, action.payload.type)
          : successFlash('Success', 'Information added successfully!'),
      };
      return newState;
    }

    case POST_EMPLOYEE_IDENTITY_DL_DATA: {
      const newState = {
        ...state,
        PostDLData: action.payload.errmsg
          ? errorFlash(action.payload.errmsg, action.payload.type)
          : successFlash('Success', 'Information added successfully!'),
      };
      return newState;
    }

    case POST_EMPLOYEE_IDENTITY_PASSPORT_DATA: {
      const newState = {
        ...state,
        PostPassportData: action.payload.errmsg
          ? errorFlash(action.payload.errmsg, action.payload.type)
          : successFlash('Success', 'Information added successfully!'),
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default ProfileReducer;
