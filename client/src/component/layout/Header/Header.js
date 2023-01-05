import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
 import {MdAccountCircle } from "react-icons/md";
 import {MdSearch } from "react-icons/md";
 import {MdAddShoppingCart } from "react-icons/md";


const options = {
  burgerColorHover: "blue",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "blue",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "blue",
  link1Margin: "1vmax",
  profileIcon:"true",
  ProfileIconElement:MdAccountCircle,
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIcon: "true",
  cartIcon:"true",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "blue",
  SearchIconElement:MdSearch,
  searchIconColorHover: "blue",
  cartIconColorHover: "blue",
  cartIconMargin: "1vmax",
  CartIconElement:MdAddShoppingCart
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
