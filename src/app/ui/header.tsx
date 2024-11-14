import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import home_icon from '../ui/icons/home_icon.png';
import search_icon from '../ui/icons/search_icon.png';
import register_icon from '../ui/icons/uploder_icon.png';
import recommendation_icon from '../ui/icons/recomendation_icon.png';
//import information_icon from '../ui/icons/使い方アイコン.png';
import setting_icon from '../ui/icons/setting_icon.png';

import logo from '../ui/logo/ロゴ.png'


const Header = () => {
  const colors = ['#2FA8E1', '#E20615', '#73BB2B', '#E7CF33', '#8E8E8E'];
  const icons = [home_icon, recommendation_icon, search_icon, register_icon, setting_icon];
  const labels = ['本だな', 'おすすめの本', '本をさがす', '本のとうろく', 'せってい/つかいかた'];
  const links = [
    "/categories",
    "/recomendation",
    "/search",
    "/uploader",
    "/setting",
    "/houToUse"
  ];

  return (
    <header className="bg-sky-swift flex flex-wrap items-center justify-center p-5 md:p-6 lg:p-8">

       {/* ロゴ */}
       <div className=" p-3 mx-6 md:mx-8 lg:mx-10">
        <Link href='/'>
          <Image
            src={logo}
            alt="サイトのロゴ"
            width={270}  // 必要に応じて調整
            height={270}  // 必要に応じて調整
            className="object-contain"
          />
        </Link>
      </div>


      {/* 左側のアイコンコンテナ */}
      <div className="flex flex-wrap p-5 gap-2 md:gap-4 lg:gap-6 justify-center">
        {colors.slice(0, 5
        ).map((color, index) => (
          <a key={index} href={links[index]} className="flex flex-col items-center">
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <div className=" w-[110px] h-[110px] rounded-full border-2 border-transparent flex items-center justify-center hover:border-white hover:border-dashed ">
                <Image
                  src={icons[index]}
                  alt={labels[index]}
                  width={65}  // アイコンのサイズを調整
                  height={65} // アイコンのサイズを調整
                  className="object-contain"
                />
              </div>
            </div>
            <span className="mt-2 text-sm md:text-lg lg:text-xl font-medium text-gray-700">{labels[index]}</span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
