import { Link, useHistory } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const history = useHistory();

  const handleMovieClick = (movie) => {
    history.push({
      pathname: `/movies/${movie.id}`,
      state: { from: "movieList" } 
    });
  };

  return (
    <div className={css.section}>
      <ul className={css.list}>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <button onClick={() => handleMovieClick(movie)}>
                  {movie.title}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;

