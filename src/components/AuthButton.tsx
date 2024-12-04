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
        border: "none",
        borderRadius: "35px",
        cursor: "pointer",
        backgroundColor: "#ea580c",
        transition: "background-color 0.2s",
        color: "#FFFFFF",
        fontWeight: 500
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "#73BB3B", e.currentTarget.style.color = "#374151")
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ea580c", e.currentTarget.style.color = "#FFFFFF")}
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