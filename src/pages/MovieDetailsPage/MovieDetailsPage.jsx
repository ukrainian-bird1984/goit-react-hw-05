import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { searchMovies } from "../../helpers/searchMoviesApi";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const searchMoviesDetails = async () => {
      try {
        const response = await searchMovies(movieId);
        setMovies(response.result);
      } catch (error) {
        setError(error.message);
      }
    };
    searchMoviesDetails();
  }, [movieId]);

  return (
    <div>
      {loading && <MovieDetails movies={movies} />}
      {error && <p className={css.error}>{error}</p>}
    </div>
  );
};

export default MovieDetailsPage;