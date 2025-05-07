"use client";

import { useState } from "react";
import { useIdentify } from "@veltdev/react";
import UserSwitcher from "./UserSelect";

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isActive?: boolean;
}

export default function AuthComponent() {
  // Create a set of predefined users
  const generateUsers = (): User[] => {
    return [
      {
        uid: "user1",
        displayName: "John Doe",
        email: "john@velt.dev",
        photoURL: "https://i.pravatar.cc/301?img=12",
        isActive: false,
      },
      {
        uid: "user2",
        displayName: "Jane Smith",
        email: "jane@velt.dev",
        photoURL: "https://i.pravatar.cc/301?img=5",
        isActive: true,
      },
      {
        uid: "user3",
        displayName: "Alex Johnson",
        email: "alex@velt.dev",
        photoURL: "https://i.pravatar.cc/301?img=33",
        isActive: false,
      },
    ];
  };

  // Initialize with predefined users
  const [users] = useState<User[]>(generateUsers());
  const [currentUser, setCurrentUser] = useState<User>(users[1]); // Start with Jane Smith

  // Create the Velt user object from the current user
  const veltUser = {
    userId: currentUser.uid,
    name: currentUser.displayName,
    email: currentUser.email,
    photoUrl: currentUser.photoURL,
    organizationId: "my-organization",
  };

  console.log("Velt user object:", veltUser);
  console.log("Current user:", currentUser);

  // Identify the current user with Velt
  useIdentify(veltUser);

  // Handle user switching
  const handleUserChange = (user: User) => {
    console.log("Switching to user:", user.displayName);
    setCurrentUser({ ...user });
  };

  return (
    <UserSwitcher
      users={users}
      currentUser={currentUser}
      onUserChange={handleUserChange}
    />
  );
}
