import { getPostById } from "@/actions/postActions";
import PostCard from "@/components/PostCard";
import React from "react";

export default async function page({ params: { postid }, searchParams }) {
  const post = await getPostById(postid);
  return <div>
  {post && <PostCard post={post}/>}
  </div>;
}
