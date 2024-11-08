import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import home_icon from '../ui/icons/本棚アイコン.png';
import search_icon from '../ui/icons/検索アイコン.png';
import register_icon from '../ui/icons/登録_アイコン.png';
import recommendation_icon from '../ui/icons/本の登録アイコン.png';
import information_icon from '../ui/icons/使い方アイコン.png';
import setting_icon from '../ui/icons/設定アイコン.png';

import logo from '../ui/logo/ロゴ1-1（背景透過）.png'


const Header = () => {
  const colors = ['#EA5415', '#73BB2B', '#E7CF33', '#E20615', '#2FA8E1', '#8E8E8E'];
  const icons = [home_icon, search_icon, register_icon, recommendation_icon, information_icon, setting_icon];
  const labels = ['本だな', '本をさがす', '本のとうろく', 'おすすめの本', 'つかいかた', 'せってい'];
  const links = [
    "/categories",
    "/search",
    "/uploder",
    "/recommendation",
    "/howToUse",
    "/setting"
  ];

  return (
    <header className="bg-sky-swift flex flex-wrap items-center justify-center p-10 md:p-6 lg:p-8">
      {/* 左側のアイコンコンテナ */}
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center">
        {colors.slice(0, 3).map((color, index) => (
          <a key={index} href={links[index]} className="flex flex-col items-center">
            <div
              className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <div className="w-[110px] h-[110px] rounded-full border-2 border-dashed border-white flex items-center justify-center hover:border-solid">
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

      {/* ロゴ */}
      <div className=" mx-6 md:mx-8 lg:mx-10">
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

      {/* 右側のアイコンコンテナ */}
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center">
        {colors.slice(3).map((color, index) => (
          <a key={index} href={links[index + 3]} className="flex flex-col items-center">
            <div
              className="w-[120px] h-[120px]  rounded-full flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <div className="w-[110px] h-[110px] rounded-full border-2 border-dashed border-white flex items-center justify-center hover:border-solid">
                <Image
                  src={icons[index + 3]}
                  alt={labels[index + 3]}
                  width={55}  // アイコンのサイズを調整
                  height={55} // アイコンのサイズを調整
                  className="object-contain"
                />
              </div>
            </div>
            <span className="mt-2 text-sm md:text-lg lg:text-xl font-medium text-gray-700">{labels[index + 3]}</span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
