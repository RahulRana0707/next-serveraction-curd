"use client";
import React from "react";
import PostCard from "./PostCard";
import { experimental_useOptimistic as useOptimistic, useRef } from "react";
import { deletePost } from "@/actions/postActions";

export default function PostList({ posts }) {
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({ ...state, posts: newPosts })
  );
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete?")) {
      const newPosts = posts.filter((post) => post._id !== id);
      addOptimisticPosts((optimisticPosts.post = newPosts));
      await deletePost(id);
    }
  };
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {optimisticPosts.posts.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
