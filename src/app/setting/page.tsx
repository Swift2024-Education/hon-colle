'use client'

import Link from "next/link";
import React from "react";
import { LogInButton, LogOutButton } from "@/components/AuthButton";
import { useSession } from "next-auth/react";
import { useState, ChangeEvent } from 'react'

export default function Page() {

    const [inputText, setInputText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleClick = () => {
        console.log(inputText);
    };

    const { data: session, status } = useSession();
    console.log(session?.idToken); // ID トークンを sessionに格納できている


    return (
        <div className="bg-sky-200 h-max min-h-screen flex">
            <div className="bg-amber-300 min-h-48 h-fit my-20 mx-auto rounded-xl">
                <div className="bg-white m-8 rounded-xl">
                    <div className="p-4">

                        <h2 className="text-gray-700 pl-8 p-4 text-4xl font-bold text-center">せってい</h2>

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">なまえ</div>
                        </div>

                        <input className="px-auto p-1 max-w-md border-stone-950 rounded-xl placeholder-gray-500 border ml-16" placeholder="結城 さくな" onChange={handleChange}></input>
                        {inputText === '' && (
                            <p className="text-red-500 text-center italic text-base">
                                名前を入力してください。
                            </p>
                        )}
                        {/*名前を入力する場所*/}

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">ログイン</div>
                        </div>

                        {/*<h3 className="text-gray-700 pl-8 p-1 text-xl">googleアカウント表示予定（仮）</h3>*/}
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <div style={{ margin: "10px" }}>
                                {status === "loading" && <p>Loading...</p>}
                                {!session && (
                                    <div>
                                        <LogInButton />
                                        <p>ログインしてください</p>
                                    </div>
                                )}
                                {session && (
                                    <div>
                                        <LogOutButton />
                                        <p>{session.user?.email}</p>

                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="bg-orange-600 rounded-full w-fit ml-8" onClick={handleClick}>
                            <Link href="../">
                                <div className="text-gray-700 text-xl text-center mx-6">
                                    せってい を ほぞん
                                </div>
                            </Link>
                        </button>
                        {/*クリックで/Searchに移動，入力された名前をコンソールに表示*/}
                    </div>
                </div>
            </div>
        </div>
    );
}