"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  isActive?: boolean;
}

interface UserSwitcherProps {
  users: User[];
  currentUser: User;
  onUserChange: (user: User) => void;
}

export default function UserSwitcher({
  users,
  currentUser,
  onUserChange,
}: UserSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdown = document.getElementById("user-dropdown");
      const button = document.getElementById("user-dropdown-button");

      if (
        dropdown &&
        button &&
        !dropdown.contains(target) &&
        !button.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const selectUser = (user: User, e: React.MouseEvent) => {
    e.stopPropagation();
    onUserChange(user);
    setIsOpen(false);
    console.log("Selected user:", user);
  };

  return (
    <div className="relative" title="Switch User" aria-label="Switch User">
      {isOpen && (
        <div
          id="user-dropdown"
          className="absolute right-0 bottom-full mb-2 w-64 bg-gray-900 rounded-lg shadow-lg z-50 overflow-hidden"
        >
          <div className="p-2">
            {users.map((user) => (
              <div
                key={user.uid}
                onClick={(e) => selectUser(user, e)}
                className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={user.photoURL || "/placeholder.svg"}
                    alt={user.displayName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {user.isActive && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{user.displayName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        id="user-dropdown-button"
        onClick={toggleDropdown}
        className="flex items-center gap-2 p-2 rounded-full bg-gray-800 text-white"
      >
        <div className="relative">
          <Image
            src={currentUser.photoURL || "/placeholder.svg"}
            alt={currentUser.displayName}
            width={32}
            height={32}
            className="rounded-full"
          />
          {currentUser.isActive && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
          )}
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

    </div>
  );
}
