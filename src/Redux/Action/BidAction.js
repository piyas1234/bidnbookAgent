// http://127.0.0.1:8000/api/accounts/get-bids-data/

import { GET_BIDS_DATA } from "../Type/BidType";




export const getBidsData  = () => {
    return async dispatch => {
      try {
        const Data = await AccessApi.get(
          `/api/accounts/get-bids-data/`,
        );
        await dispatch({
          type: GET_BIDS_DATA,
          payload: Data.data,
        });
      } catch (err) {
        await dispatch({
          type: GET_BIDS_DATA,
          payload: {msg: 'EMPTY', type: 'NO DATA FOUND'},
        });
      }
    };
  };
