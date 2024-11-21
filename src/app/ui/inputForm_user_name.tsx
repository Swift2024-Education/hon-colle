'use client'

import React from "react";
import { useState } from 'react'
import { useSession } from "next-auth/react";

export default function inputForm_user_name({
    user_id,
}: {
    user_id: string;
}) {
    const [inputText, setInputText] = useState('');
    //const [submittedText, setSubmittedText] = useState('');

    const handleChange = (term: string) => {
        setInputText(term); // 入力のたびに状態を更新
    };

    function inputcheck(term: string) {
        console.log(term);
    }

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    const handleChangeUserName = async () => {
        try {
            const response = await fetch('/api/changeUserName', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: user_id,
                    user_name: userName,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to update user name');
        }
    };

    return (
        <div className="flex flex-col items-start">
            <div className="bg-amber-100 rounded-full w-fit">
                <div className="text-gray-700 text-xl text-center mx-6">なまえ</div>
            </div>

            <div className="w-[60%] mt-2 text-gray-700">
                <input
                    className="p-2 w-full max-w-2xl border-b-2 border-stone-950 focus:outline-none placeholder-gray-500"
                    placeholder="グリムジョー・ジャガー・ジャック"
                    value={inputText}
                    onChange={(e) => {
                        handleChange(e.target.value),
                        inputcheck(e.target.value);
                    }}
                />
            </div>

            {inputText === '' ? (
                <p className="text-red-500 text-center italic text-base my-2">
                    名前を入力してください。
                </p>
            ) : (
                <p className="my-8 invisible"/> //名前を入力してください分のスペースを確保
            )}

            <div className="flex justify-center mt-auto mb-8">
                <button onClick={handleChangeUserName} className="bg-orange-600 rounded-full px-6 py-2 w-[18vw] h-[4vh]">
                    <div className="w-full h-full rounded-full border-2 border-transparent flex items-center justify-center hover:border-white hover:border-dashed">
                        <div className="text-white text-xl text-center m-2">
                            せってい を ほぞん
                        </div>
                    </div>
                </button>
                {message && <p className="text-gray-700">{message}</p>}
            </div>
        </div>
    );
}