import { CHANGE_DATA } from "../actions/changeAction";
const initailState = {
  mark: 'iphone 11'
}

export const changeReducer = (state = initailState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        mark:action.payload.data
      }

    default:
      return state;
  }
};
