export const SET_STABLE_STATE = "SET_STABLE_STATE";

export const setStableState = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_STABLE_STATE, payload: bool });
  };
};
