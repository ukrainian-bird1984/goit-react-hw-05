import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;