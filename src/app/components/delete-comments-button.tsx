"use client";

import { Trash2 } from "lucide-react";
import React from "react";

const auth_token = process.env.NEXT_PUBLIC_VELT_AUTH_TOKEN as string;

function DeleteCommentsButton() {
  const options = {
    method: "POST",
    headers: {
      "x-velt-api-key": process.env.NEXT_PUBLIC_VELT_API_KEY || "",
      "x-velt-auth-token": auth_token,
      "Content-Type": "application/json",
    },
    body: '{"data":{"organizationId":"my-organization","documentId":"my-document-id"}}',
  };

  const deleteComments = () => {
    fetch("https://api.velt.dev/v1/commentannotations/delete", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  console.log(auth_token);
  return (
    <button
      onClick={deleteComments}
      title="Delete Comments"
      aria-label="Delete Comments"
      className="transition duration-200 cursor-pointer rounded-full bg-white py-2 px-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <Trash2 className="text-black" size={25} />
    </button>
  );
}

export default DeleteCommentsButton;
