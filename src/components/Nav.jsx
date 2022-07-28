import React, { useEffect, useState, memo } from 'react';
import style from '../styles/nav.css';

function Nav() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [fadeInOut, setFadeInOut] = useState('fade-in');

  const showMenuList = () => {
    if (showSideMenu) {
      setFadeInOut('fade-out');
      setTimeout(() => {
        setShowSideMenu(!showSideMenu);
      }, 1000);
    } else {
      setFadeInOut('fade-in');
      setTimeout(() => {
        setShowSideMenu(!showSideMenu);
      }, 10);
    }
  };

  const Menu = () => {
    return (
      <div className={'side-menu ' + fadeInOut}>
        <ul>
          <li>사이드 메뉴1</li>
          <li>사이드 메뉴2</li>
        </ul>
      </div>
    );
  };

  return (
    <nav className="menu-container">
      {showSideMenu ? <Menu onClick={showMenuList} /> : null}
      <ul className="menu">
        <li onClick={showMenuList}>Menu</li>
        <li className="blog-title">YU TO BLOG</li>
        <li className="search-icon">search</li>
      </ul>
    </nav>
  );
}

export default Nav;
