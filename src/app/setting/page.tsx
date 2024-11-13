'use client'

import Link from "next/link";
import { useState, ChangeEvent } from 'react'

export default function Page() {

    const [inputText, setInputText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleClick = () => {
        console.log(inputText);
    };    

    return (
          <div className="bg-sky-200 h-max min-h-screen flex">
            <div className="bg-amber-300 min-h-48 h-fit my-20 mx-auto rounded-xl">
                <div className="bg-white m-8 rounded-xl">
                    <div className="p-4">

                        <h2 className="text-gray-700 pl-8 p-4 text-4xl font-bold text-center">せってい</h2>
                        {/*ページタイトル*/}


                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">なまえ</div>
                        </div>


                        <input className= "px-auto p-1 max-w-md border-stone-950 rounded-xl placeholder-gray-500 border ml-16" placeholder="結城 さくな" onChange={handleChange}></input>
                        {inputText=== '' && (
                            <p className="text-red-500 text-center italic text-base">
                                名前を入力してください。
                            </p>
                        )}
                        {/*"結城さくな"の部分はいい感じのものに変更してほしい*/}
                        {/*名前を入力する場所*/}
                        

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">ログイン</div>
                        </div>


                        <h3 className="text-gray-700 pl-8 p-1 text-xl">googleアカウント表示予定（仮）</h3>
                        {/*今後変更しなきゃいけないとこ*/}


                        {inputText!== '' && (
                            <button className="bg-orange-600 rounded-full w-fit ml-8" onClick={handleClick}>
                                <Link href="../">
                                    <div className="text-gray-700 text-xl text-center mx-6">
                                    せってい を ほぞん
                                    </div>
                                </Link>
                            </button>
                        )}
                        {/*名前を入力している場合ボタンが赤くなり，押すとTOPページへ*/}


                        {inputText=== '' && (
                            <button className="bg-gray-400 rounded-full w-fit ml-8" onClick={handleClick}>
                                <div className="text-gray-700 text-xl text-center mx-6">
                                せってい を ほぞん
                                </div>
                            </button>
                        )}
                        {/*名前を入力していない場合ボタンが灰色になり，押しても何も起こらない*/}


                    </div>
                </div>
            </div>
          </div>
      );
}