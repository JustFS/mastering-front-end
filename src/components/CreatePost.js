import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

const CreatePost = ({ uid, displayName }) => {
  const message = useRef();
  const dispatch = useDispatch();

  const handlePost = async (e) => {
    e.preventDefault();

    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    await dispatch(addPost(data));
    message.current.value = "";
    dispatch(getPosts());
  };

  return (
    <div className="new-post-modal">
      <form onSubmit={(e) => handlePost(e)}>
        <textarea placeholder="Message..." ref={message}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreatePost;
