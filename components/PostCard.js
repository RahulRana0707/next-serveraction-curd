"use client";
import { deletePost } from "@/actions/postActions";
import { useMyContext } from "@/provider/Provider";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";

export default function PostCard({ post }) {
  const { setEditPost } = useMyContext();
  const [isPending, startTransition] = useTransition();
  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete?")) {
      await deletePost(id);
    }
  };
  return (
    <div>
      <Link href={"/"}>
        <Image
          style={{
            width: "200px !important",
            color: "transparent",
            height: "200px !important",
          }}
          src={post?.image}
          alt="image"
          width={200}
          height={200}
          priority
        />
        <h2>{post?.title}</h2>
      </Link>
      <div style={{ display: "flex", gap: 20 }}>
        <button
          onClick={() => {
            setEditPost(post);
          }}
        >
          Edit
        </button>
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(() => {
              handleDelete(post._id);
            })
          }
        >
          {isPending ? "Loading..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
