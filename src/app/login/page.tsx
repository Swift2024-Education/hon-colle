'use client';

import React from "react";
import { LogInButton, LogOutButton } from "@/components/AuthButton";
import { useSession } from "next-auth/react";

export default function Page() {

  const { data: session, status } = useSession();
  console.log(session?.idToken); // ID トークンを sessionに格納できている
  
  return (
    <div className="bg-sky-200 h-max min-h-screen flex">
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>サインイン・サインアウト</h1>
      {/* サインイン・サインアウトボタンを表示 */}
      <div style={{ margin: "20px" }}>
        <LogInButton/>
      <div style={{ margin: "20px" }}></div>
        <LogOutButton />
        {status === "loading" && <p>Loading...</p>}
        {!session && (
          <div>
            <p>Hi, please log in!</p>
          </div>
        )}
        {session && (
          <div>
            <p>Hi, {session.user?.email}!</p>
            <p> You logged in. </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

