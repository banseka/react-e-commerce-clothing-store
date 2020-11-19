import { GET_SEVITA } from "../actions/types";

const initialState = {
  product: []
};

export const sevitaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEVITA:
      return {
        product: [...action.products]
      };
    default:
      return state;
  }
};
