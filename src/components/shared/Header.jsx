import React from "react";
import { Link, NavLink } from "react-router-dom";
import stylesHeader from'../styles/stylesHeader.css'
const Header = () => {
  return (
    <header className="container_header">
      <h1 className="header__title">
        <Link  to='/'>e-commerce</Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink className="header__link" to='/login'>
            <i className="fa-solid fa-user-tie"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/purchases'>
            <i className="fa-solid fa-bag-shopping"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink className="header__link" to='/cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
