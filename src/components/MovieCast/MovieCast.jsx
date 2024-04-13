import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieCredits } from "../../helpers/searchMoviesApi";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const defaultImg =
  "https://vovkasolovev.ru/wp-content/uploads/2019/04/marvel-full-movie-list.jpg";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const serchCast = async () => {
      try {
        const data = await searchMovieCredits(movieId);
        setActors(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    serchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      {actors && (
        <ul className={css.list}>
          {actors.map(({ cast_id, name, profile_path, character }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                className={css.photo}
              />
              <h3>{name}</h3>
              <p className={css.character}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;