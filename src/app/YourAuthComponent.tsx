"use client"

import { useIdentify } from "@veltdev/react";
// import { useState } from "react";

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export default function YourAuthComponent() {
  // const userService = () => {
  //   return {
  //     uid: "user1",
  //     displayName: "User 1",
  //     email: "user1@velt.dev",
  //     photoURL: "https://i.pravatar.cc/301",
  //   };
  // };

  const generateRandomUser = (): User => {
    // Unique identifier
    const uid = crypto.randomUUID(); 
    // Simple random integer between 1 and 1000
    const randNum = Math.floor(Math.random() * 1000) + 1; 
    // Build the display name and email
    const displayName = `User ${randNum}`;
    const email = `user${randNum}@velt.dev`;
    // Pick a random avatar image (pravatar has images in [1..70])
    const avatarId = Math.floor(Math.random() * 70) + 1;
    const photoURL = `https://i.pravatar.cc/301?img=${avatarId}`;
  
    return { uid, displayName, email, photoURL };
  };

  // how do I hardcode different users in my app and log in with a different user account in each browser instance?

  // Fetch user data from user service
  // const yourAuthenticatedUser = userService();
  const yourAuthenticatedUser = generateRandomUser();
  const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

  // Create the Velt user object
  const veltUser = {
    userId: uid,
    name: displayName,
    email: email,
    photoUrl: photoURL,
    organizationId: "my-organization"
  };

  // const anotherVeltUser = {
  //   userId: "user2",
  //   name: "User 2",
  //   email: "user2@email.com",
  //   photoUrl: "https://i.pravatar.cc/302",
  //   organizationId: "my-organization"
  // }

  // const body = {
  //   data: {
  //     organizationId: "my-organization",
  //     documentId: "my-document-id",
  //     users: [veltUser, anotherVeltUser]
  //   }
  // }

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'x-velt-api-key': process.env.NEXT_PUBLIC_VELT_API_KEY || '',
  //     'x-velt-auth-token': "c3f28144de6cf0e06773245b556857d3",
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(body),
  // };
  
  // fetch('https://api.velt.dev/v1/users/add', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  //identify Velt user
  useIdentify(veltUser);
  // useIdentify(anotherVeltUser);

  // const [user] = useState(veltUser);

  // return <div>User: {user?.userId}</div>;
  return null;
}
