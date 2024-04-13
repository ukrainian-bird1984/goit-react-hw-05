import { Link, useParams, useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState, useRef } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { searchMovies } from "../../helpers/searchMoviesApi";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await searchMovies(movieId);
        if (isMounted.current) {
          setMovies(response.results[0]);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted.current) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchMovieDetails();

    return () => {
      isMounted.current = false;
    };
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {movies && (
        <>
          <MovieDetails movie={movies} />
          <Link to={location.state?.from || "/movies"}>Go back</Link>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
