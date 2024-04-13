import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { searchMovieDetails } from "../../helpers/searchMoviesApi";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const searchMovies = async () => {
      try {
        const data = await searchMovieDetails(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <Link className={css.link} to={backLink.current}>
        Go back
      </Link>
      {movies && <MovieDetails movies={movies} />}
      <div className={css.infoContainer}>
        <p>Additional information</p>
        <ul className={css.listLink}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;