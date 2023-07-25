import React from "react";
import PostForm from "@/components/PostForm";
import { getAllPosts } from "@/actions/postActions";
import PostList from "@/components/PostList";
export default async function Home() {
  const { posts } = await getAllPosts();

  return (
    <div>
      <h1>Server Actions CURD</h1>
      <PostForm />
      {posts && <PostList posts={posts}/>}
    </div>
  );
}
