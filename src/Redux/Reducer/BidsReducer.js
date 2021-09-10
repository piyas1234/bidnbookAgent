const {GET_BIDS_DATA} = require('../Type/BidType');

const initialState = {
    Bids:[]
};

const BidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BIDS_DATA: {
      const newState = {
        ...state,
        Bids: action.payload,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default BidsReducer;
