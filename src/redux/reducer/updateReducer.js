import { UPDATE_DATA } from "../actions/updateAction";
const initailState = {
  id: 1,
  mark: "nokia",
};

export const updateReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        mark: action.payload.data,
      };

    default:
      return state;
  }
};
