import { GET_HYBRIDE } from "../actions/types";

const initialState = {
  product: []
}

export const hybrideReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HYBRIDE:
      return {
        product: [...action.products]
      };
    default:
      return state;
  }
};
