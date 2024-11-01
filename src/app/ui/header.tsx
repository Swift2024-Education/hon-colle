// components/Header.js
import React from 'react';
import './header_ui.css'; // CSSファイルのインポート

/*
import home_icon from '@/ui/icons/本棚アイコン.png'; // アイコンのパス
import search_icon from '@/ui/icons/検索アイコン.png'; 
import register_icon from '@/ui/icons本の登録アイコン.png'; 
import recommendation_icon from '@/ui/icons/本の登録.png';
import information_icon from '@/ui/icons/使い方アイコン.png'; 
import setting_icon from '@/ui/icons/設定アイコン.png'; 
*/

const Header = () => {

 const colors = ['#EA5415', '#73BB2B', '#E7CF33', '#E20615', '#2FA8E1', '#8E8E8E'];/*円の色を左から*/

  return (
    <header className="header">
      <div className="icon-container">
        {/* 左側のアイコン */}
        {colors.slice(0, 3).map((color, index) => (
          <div key={index} className="circle" style={{ backgroundColor: color }}>
            <div className="small-circle" /> 
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
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
