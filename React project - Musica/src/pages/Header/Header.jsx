import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../selects";
import logo from "./img/headphones-svgrepo-com.svg";
import cartIco from "./img/cart-svgrepo-com.svg";

import "./Header.scss";

const Header = () => {
  let count = useSelector(selectCartItems);
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img className="header__logo-img" src={logo} alt="logo" />
        <span className="header__logo-text"> musica</span>
      </Link>
      <div className="header__nav">
        <Link className="header__nav-link" to="/">
          Home
        </Link>
        <Link className="header__nav-link" to="/cart">
          Cart
        </Link>
        <Link className="header__nav-link" to="/favourite">
          Favourite
        </Link>
      </div>
      <a className="header__cart-wrap" href="/">
        <img src={cartIco} alt="cart" className="header__cart" />
        <span className="header__cart-counter-text">({count})</span>
      </a>
    </header>
  );
};

Header.propTypes = {
  counter: PropTypes.number,
};

export default Header;
