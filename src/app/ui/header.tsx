import React from 'react';
import Image from 'next/image';

import home_icon from '../ui/icons/本棚アイコン.png';
import search_icon from '../ui/icons/検索アイコン.png';
import register_icon from '../ui/icons/本の登録.png';
import recommendation_icon from '../ui/icons/本の登録アイコン.png';
import information_icon from '../ui/icons/使い方アイコン.png';
import setting_icon from '../ui/icons/設定アイコン.png';

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
    <header className="bg-[#D0EDF3] flex flex-wrap items-center justify-center p-5 md:p-6 lg:p-8">
      {/* 左側のアイコンコンテナ */}
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center">
        {colors.slice(0, 3).map((color, index) => (
          <a key={index} href={links[index]} className="flex flex-col items-center">
            <div 
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full flex items-center justify-center" 
              style={{ backgroundColor: color }}
            >
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] rounded-full border-4 border-dashed border-white flex items-center justify-center hover:border-solid">
                <Image 
                  src={icons[index]} 
                  alt={labels[index]} 
                  width={90}  // アイコンのサイズを調整
                  height={90} // アイコンのサイズを調整
                  className="object-contain"
                />
              </div>
            </div>
            <span className="mt-2 text-sm md:text-lg lg:text-xl font-medium text-gray-700">{labels[index]}</span>
          </a>
        ))}
      </div>

      {/* ロゴ */}
      <div className="text-center mx-6 md:mx-12 lg:mx-20 text-lg md:text-2xl lg:text-3xl font-bold text-gray-800">
        サイトのロゴ
      </div>

      {/* 右側のアイコンコンテナ */}
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center">
        {colors.slice(3).map((color, index) => (
          <a key={index} href={links[index + 3]} className="flex flex-col items-center">
            <div 
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-full flex items-center justify-center" 
              style={{ backgroundColor: color }}
            >
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] rounded-full border-4 border-dashed border-white flex items-center justify-center hover:border-solid">
                <Image 
                  src={icons[index + 3]} 
                  alt={labels[index + 3]} 
                  width={90}  // アイコンのサイズを調整
                  height={90} // アイコンのサイズを調整
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
