import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3003/posts?_sort=id&_order=desc`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3003/posts`, data)
      .then(() => {
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editPost = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3003/posts/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        dispatch({ type: EDIT_POST, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3003/posts/${postId}`,
    })
      .then(() => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3003/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
