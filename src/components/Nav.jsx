import React, { useState } from 'react';
import style from '../styles/nav.css';
import { CSSTransition } from 'react-transition-group';

function Nav() {
  const [onMenu, setOnMenu] = useState(false);

  const Menu = () => {
    return (
      <div>
        <CSSTransition in={onMenu} classNames="side-menu" timeout={200}>
          <ul>
            <li>메뉴1</li>
            <li>메뉴2</li>
          </ul>
        </CSSTransition>
      </div>
    );
  };

  const showMenu = () => {
    setOnMenu(!onMenu);
  };

  return (
    <nav className="menu-container">
      <Menu />
      <ul className="menu">
        <li onClick={showMenu}>Menu</li>
        <li className="blog-title">YU TO BLOG</li>
        <li className="search-icon">search</li>
      </ul>
    </nav>
  );
}

export default Nav;
