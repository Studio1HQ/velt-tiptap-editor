"use client"

import { useIdentify } from "@veltdev/react";
import { useState } from "react";

export default function YourAuthComponent() {
  const userService = () => {
    return {
      uid: "user1",
      displayName: "User 1",
      email: "user1@velt.dev",
      photoURL: "https://i.pravatar.cc/301",
    };
  };

  // Fetch user data from user service
  let yourAuthenticatedUser = userService();
  const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

  // Create the Velt user object
  let veltUser = {
    userId: uid,
    name: displayName,
    email: email,
    photoUrl: photoURL,
    organizationId: "my-organization"
  };

  //identify Velt user
  useIdentify(veltUser);

  let [user, setUser] = useState(veltUser);

  return <div>User: {user?.userId}</div>;
}
