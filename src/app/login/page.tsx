/*import {LogInButton} from "@/components/AuthButton";
import { auth } from "../../../auth";

export default async function Home(){
    const session=await auth();

  console.log(session?.idToken); // ID トークンを sessionに格納できている

return (
  <div className="w-full text-center">
    <h1 className="text-2xl my-12">Hello World</h1>
    <div>
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
);
}
*/
// page.tsx

'use client';

import React from "react";
import { LogInButton, LogOutButton } from "@/components/AuthButton";
//import { auth } from "../../../auth";
import { useSession } from "next-auth/react";

//const session = await auth();
//console.log(session?.idToken); // ID トークンを sessionに格納できている

export default function Page() {

  const { data: session, status } = useSession();
  console.log(session?.idToken); // ID トークンを sessionに格納できている
  
  return (
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
  );
};

