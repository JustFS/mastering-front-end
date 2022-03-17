import React from "react";

const CreatePost = () => {
  return (
    <div className="new-post-modal">
      <form>
        <textarea placeholder="Message..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default CreatePost;
