import React from "react";

function PostCard({ post }) {
  return (
    <div className="post" key={post.id}>
      <div className="post__title">{post.title}</div>
      <p className="post__body">{post.body}</p>
    </div>
  );
}

export default PostCard;
