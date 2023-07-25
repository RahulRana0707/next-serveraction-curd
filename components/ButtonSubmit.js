'use client'
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function ButtonSubmit({value}) {
    const {pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
        {pending ? "Loading..." : value}
      </button>
  )
}
