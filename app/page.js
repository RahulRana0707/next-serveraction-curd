import React from "react";
import PostForm from "@/components/PostForm";
import { getAllPosts } from "@/actions/postActions";
import PostList from "@/components/PostList";
import Feature from "@/components/Feature";
export default async function Home({params,searchParams}) {
  const { posts } = await getAllPosts(searchParams);
  return (
    <div>
      <h1>Server Actions CURD</h1>
      <Feature />
      <PostForm />
      {posts && <PostList posts={posts} />}
    </div>
  );
}
