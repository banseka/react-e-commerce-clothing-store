export const UPDATE_DATA = "UPDATE_DATA";

export function updateAction() {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DATA,
      payload: { id: 1, data: "data updated" },
    });
  };
}
