'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";

import boy_smile from '../ui/childrensImages/boy_smile.webp';
import girl_smile from '../ui/childrensImages/girl_smile.webp';

const links = [
  "/categories",
  "/search",
];

//export const runtime = 'edge';

export default function Page() {
  return (
    <>
      <div className="bg-sky-swift h-max min-h-screen flex flex-col items-center">
        <h1 className="text-gray-700 text-5xl p-5 font-medium text-center">
          本をさがす
        </h1>
        <div className="grid grid-cols-2 gap-10 pt-10 items-center">
          {/* リンク1 */}
          <Link href={links[0]}>
            <div
              className="w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[500px] lg:h-[500px] pt-10 bg-white text-gray-700 flex flex-col items-center rounded-marukado shadow-lg hover:bg-amber-50"
              style={{ borderColor: "#EA5415" }}
            >
              <div className="text-4xl font-bold">カテゴリから探す</div>
              <div className="text-lg mt-4 text-center">
                読みたい本の種類から探す</div>
                 {/* 画像のコンテナ */}
              <div className="flex-grow flex justify-center">
                <Image
                  src={girl_smile}
                  alt="smilesgirl"
                  className="h-[70%] w-auto object-contain"
                />
              </div>
            </div>
          </Link>

          {/* リンク2 */}
          <Link href={links[1]}>
            <div
              className="w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[500px] lg:h-[500px] pt-10 bg-white text-gray-700 flex flex-col items-center rounded-marukado shadow-lg hover:bg-amber-50"
              style={{ borderColor: "#2FA8E1" }}
            >
              <div className="text-4xl font-bold">キーワードからさがす</div>
              <div className="text-lg mt-4 text-center">
                検索したい言葉から探す</div>
                  {/* 画像のコンテナ */}
              <div className="flex-grow flex justify-center">
                <Image
                  src={boy_smile}
                  alt="smilesboy"
                  className="h-[70%] w-auto object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
