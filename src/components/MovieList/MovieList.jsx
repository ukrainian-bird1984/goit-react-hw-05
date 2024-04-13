import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.list}>
      <ul className={css.item}>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${location.pathname}/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
