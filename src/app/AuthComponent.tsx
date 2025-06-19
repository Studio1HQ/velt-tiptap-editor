"use client";

import { useState } from "react";
import { useIdentify, useVeltClient } from "@veltdev/react";
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

  const [users, setUsers] = useState<User[]>(generateUsers());
  const [currentUser, setCurrentUser] = useState<User>(
    users.find((user) => user.isActive) || users[0]
  );

  const { client } = useVeltClient();

  // const contactElement = useContactUtils();
  const contactElement = client?.getContactElement();

  contactElement?.updateContactList(
    users.map((user) => ({
      userId: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      organizationId: "my-organization",
    }))
  );

  // Initialize with predefined users

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
  console.log("All users:", users);

  // Identify the current user with Velt
  useIdentify(veltUser);

  // Handle user switching
  const handleUserChange = (selectedUser: User) => {
    console.log("Switching to user:", selectedUser.displayName);
    // Update all users - set isActive to true for selected user, false for others
    const updatedUsers = users.map((user) => ({
      ...user,
      isActive: user.uid === selectedUser.uid,
    }));

    // Update both states
    setUsers(updatedUsers);
    setCurrentUser({ ...selectedUser, isActive: true });
  };

  return (
    <UserSwitcher
      users={users}
      currentUser={currentUser}
      onUserChange={handleUserChange}
    />
  );
}
