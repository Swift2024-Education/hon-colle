'use client';

import { signIn, signOut } from "next-auth/react";
import React from "react";

interface AuthButtonProps {
  onClick: () => void;
  label: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        transition: "background-color 0.2s",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "#e0e0e0")
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
    >
      {label}
    </button>
  );
};

export const LogInButton = () => {
  return <AuthButton onClick={() => signIn()} label="Log In"/>
};

export const LogOutButton = () => {
  return <AuthButton onClick={() => signOut()} label="Log Out"/>;
};