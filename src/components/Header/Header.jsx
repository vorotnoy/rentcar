import React from "react";
import { Navigation } from "../Navigation/Navigation";
import logo from "/logo.png";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <section className={s.container}>
        <nav className={s.nav}>
          <NavLink to="/">
            <img src={logo} alt="Tent Car" className={s.image} />
          </NavLink>
          <Navigation />
        </nav>
      </section>
    </>
  );
};
