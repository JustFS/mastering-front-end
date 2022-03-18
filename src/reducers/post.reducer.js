import {
  ADD_COMMENT,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            message: action.payload.message,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.postId);
    case ADD_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            comments: action.payload.data,d
          };
        } else return post;
      });
    default:
      return state;
  }
}
