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
        borderRadius: "35px",
        cursor: "pointer",
        backgroundColor: "#e5e5e5",
        transition: "background-color 0.2s",
        color: "#374151",
        fontWeight: "bold"
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "#73BB3B")
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e5e5e5")}
    >
      {label}
    </button>
  );
};

export const LogInButton = () => {
  return <AuthButton onClick={() => signIn()} label="ログインする" />
};

export const LogOutButton = () => {
  return <AuthButton onClick={() => signOut()} label="ログアウトする" />;
};