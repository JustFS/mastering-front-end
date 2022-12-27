import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const Thread = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5600/post/").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="thread-container">
      {posts
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .map((post) => (
          <Post key={post._id} post={post} userId={userId} />
        ))}
    </div>
  );
};

export default Thread;
