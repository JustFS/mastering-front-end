import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/post.slice";
import Post from "./Post";

const Thread = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsData);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="thread-container">
      {posts &&
        posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Thread;
