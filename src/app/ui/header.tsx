// components/Header.js
import React from 'react';
import Image from 'next/image';
import './header_ui.css'; // CSSファイルのインポート


import home_icon from '../ui/icons/本棚アイコン.png'; // 相対パス
import search_icon from '../ui/icons/検索アイコン.png';
import register_icon from '../ui/icons/本の登録.png';
import recommendation_icon from '../ui/icons/本の登録アイコン.png';
import information_icon from '../ui/icons/使い方アイコン.png';
import setting_icon from '../ui/icons/設定アイコン.png';


const Header = () => {

 const colors = ['#EA5415', '#73BB2B', '#E7CF33', '#E20615', '#2FA8E1', '#8E8E8E'];/*円の色を左から*/
 const icons = [home_icon,search_icon,register_icon,recommendation_icon,information_icon,setting_icon];
 const labels = ['本だな','本をさがす','本のとうろく','おすすめの本','つかいかた','せってい']

 const sizes = [
  { width: 90, height: 0 }, // home_icon
  { width: 95, height: 95 }, // search_icon
  { width: 75, height: 75 }, // register_icon
  { width: 80, height: 80 }, // recommendation_icon
  { width: 90, height: 90 }, // information_icon
  { width: 100, height: 100 }, // setting_icon
];

  return (
    <header className="header">
      <div className="icon-container">
        {/* 左側のアイコン */}
        {colors.slice(0, 3).map((color, index) => (
          <div key={index} className="circle" style={{ backgroundColor: color }}>
            <div className="small-circle" />
            <Image 
              src={icons[index]} 
              alt={labels[index]} 
              className="icons" 
              width={sizes[index].width}   // 幅を指定
              height={sizes[index].height}
            />
            <div className="labels">{labels[index]}</div>
          </div>
        ))}
      </div>

      {/* 中央にロゴを配置 */}
      <div className="logo">
        <h1>サイトのロゴ</h1>
      </div>

      <div className="icon-container">
        {/* 右側のアイコン */}
        {colors.slice(3).map((color, index) => (
          <div key={index} className="circle" style={{ backgroundColor: color }}>
            <div className="small-circle" />
            <Image 
              src={icons[index + 3]} // 右側のアイコンはインデックスをずらす
              alt={labels[index + 3]} 
              className="icons" 
              width={sizes[index + 3].width}   // 幅を指定
              height={sizes[index +3].height}
            />
            <div className="labels">{labels[index + 3]}</div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
