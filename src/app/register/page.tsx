import React from 'react';
import Link from 'next/link';
import InputForm from '@/app/ui/inputform';
import BookNumberTable from '@/app/ui/booknumbertable';
//import HandleReset from '@/app/ui/handlereset';
import RegisterBooks from '@/app/ui/registerbooks';
//import { deleteRecordsByUserId } from '@/app/lib/data';
import { auth } from '../../../auth';
import Image from "next/image";
import boy_smile from '@/app/ui/childrensImages/boy_smile.png';//右の画像（後に変える）
import binder from '@/app/ui/binder.png';//左の画像（後に変える）

export default async function Page(props: {
  searchParams?: Promise<{ number?: string; state: string; id?: string }>;
}) {
  const searchParams = await props.searchParams;
  const number = searchParams?.number || '';
  const state = searchParams?.state || '';
  //const id = searchParams?.id || '';
  //await deleteRecordsByUserId('sutou', state);

  const data = await auth();
  let id = ''
  if (data != null) {
    id = data.user?.email || 'UnknownUser'
  }

  return (
    <div className="bg-sky-swift h-max min-h-screen">
      <h2 className="text-gray-700 p-4 text-4xl font-bold text-center">登録画面</h2>

      <div className="flex justify-between mt-8">
        {/*左側*/}
        <div className="w-[45%] flex flex-col items-center justify-between ml-16 h-full relative ">
          {/*左の画像*/}
          <div className="mb-4 w-full h-full">
            <Image
              src={binder}
              alt="your image"
              className="w-full h-[800px] object-fill"
            />
          </div>

          {/*入力フォーム等*/}
          <div className="w-full flex flex-col items-center absolute top-0 mt-28">
            <div className="w-full mt-2">
              <InputForm placeholder="数字を入力" />
            </div>
            {/*
            <div className="mb-4 w-full">
              <HandleReset />
            </div>
            */}
            {/*}
            <div className="mb-4 w-full">
              数字は[{number ? number : "null"}] idは[{id ? id : "id"}]
            </div>
            */}
            <div className="mb-4 w-full">
              <BookNumberTable number={number} id={id} />
            </div>
            <RegisterBooks bookNumber={number} id={id} state={state} />
          </div>

          {/*「ほんだなに戻る」ボタン*/}
          <div className="mt-auto w-full flex items-center justify-center absolute bottom-0 mb-16 ">
            <button className="bg-orange-600 rounded-full px-6 py-2 w-[18vw] h-[7vh]">
              <div className="w-full h-full rounded-full border-2 border-transparent flex items-center justify-center hover:border-white hover:border-dashed">
                <Link href="/history">
                  <div className="w-full h-full flex items-center justify-center text-white text-xl text-center">
                    本だなにもどる
                  </div>
                </Link>
              </div>
            </button>
          </div>
        </div>


        {/*右側*/}
        <div className="relative w-[50%] flex flex-col items-center">
          {/*上部分*/}
          <div className="absolute flex items-center justify-center w-80 h-64 bg-white rounded-marukado mt-10 z-10">
              <p className="text-center text-lg font-bold text-gray-700">
                本をとりかえしてくれたんだね！<br />
                ありがとう！<br />
                さっそく本だなにもどそう！
              </p>
              {/*吹き出しの三角形部分*/}
              {/*<div className="absolute -bottom-4 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white"></div>*/}
          </div>

          {/*下部分*/}
          <div className="absolute bottom-0 flex items-end z-0 ml-16">
            <Image
              src={boy_smile}
              alt="another image"
              className="w-auto max-w-[90%] max-h-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

