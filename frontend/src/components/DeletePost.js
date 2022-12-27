import React from "react";
import axios from "axios";

const DeletePost = ({ postId }) => {
  const handleDelete = () => {
    axios.delete("http://localhost:5600/post/" + postId);
  };

  return (
    <span id="delete-btn" onClick={() => handleDelete()}>
      &#10010;
    </span>
  );
};

export default DeletePost;
