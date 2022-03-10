import { SET_STABLE_STATE } from "../actions/stable.action";

const initialState = {};

export default function stableReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STABLE_STATE:
      return action.payload;
    default:
      return state;
  }
}
