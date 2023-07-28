"use server";

import connectDB from "@/database/mongodb";
import Post from "@/models/postModel";
import { revalidatePath } from "next/cache";

connectDB();

export async function getAllPosts(searchParams) {
  const search = searchParams.search || "";
  const sort = searchParams.sort || "createdAt";

  try {
    const posts = await Post.find({ title: { $regex: search } }).sort(sort);
    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));
    return { posts: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to get post");
  }
}

export async function getPostById(postId) {
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return {
        message: "Post not found",
        ok: false,
      };
    }
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to get post");
  }
}

export async function createPost(data) {
  try {
    const newPost = new Post(data);
    await newPost.save();
    revalidatePath("/");
    return { ...newPost._doc, _id: newPost._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to create post");
  }
}

export async function UpdatePost({ title, image, id }) {
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, image },
      { new: true }
    );
    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to update post");
  }
}

export async function deletePost(postId) {
  try {
    const post = await Post.findByIdAndDelete(postId, { new: true });
    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to delete post");
  }
}
