"use client";
import { UpdatePost, createPost } from "@/actions/postActions";
import React, { useRef} from "react";
import ButtonSubmit from "./ButtonSubmit";
import { useMyContext } from "@/provider/Provider";

export default function PostForm() {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyContext();
  async function handleAction(formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    if (editPost) {
      console.log({ title, image, id: editPost._id });
      await UpdatePost({ title, image, id: editPost._id });
    } else {
      await createPost({ title, image });
    }
    setEditPost();
    formRef.current.reset();
  }
  return (
    <form
      ref={formRef}
      action={handleAction}
      style={{ display: "flex", gap: 20, margin: "30px 0" }}
    >
      <input
        type="text"
        name="title"
        placeholder="title"
        required
        defaultValue={editPost?.title}
      />
      <input
        type="text"
        name="image"
        placeholder="image"
        required
        defaultValue={editPost?.image}
      />
      {editPost ? (
        <>
          <ButtonSubmit value={"update"} />
          <button
            type="button"
            onClick={() => {
              setEditPost();
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <ButtonSubmit value={"create"} />
      )}
    </form>
  );
}
