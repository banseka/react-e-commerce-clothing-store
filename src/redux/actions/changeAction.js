export const CHANGE_DATA = "CHANGE_DATA";

export function changeAction() {
  return function (dispatch) {
    dispatch({
      type: CHANGE_DATA,
      payload: {
        id: 1,
        data: 'data changed',
      },
    });
  };
}
