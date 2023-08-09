import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to="/" className={s.menuItem}>
        Головна
      </NavLink>
      <NavLink to="/catalog" className={s.menuItem}>
        Каталог
      </NavLink>
      <NavLink to="/favorite" className={s.menuItem}>
        Обрані
      </NavLink>
    </div>
  );
};
