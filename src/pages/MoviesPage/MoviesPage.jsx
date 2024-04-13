import { useSearchParams } from "react-router-dom";
import MoviesForm from "../../components/MoviesForm/MoviesForm";
import { useEffect, useState } from "react";
import { searchMovies } from "../../helpers/searchMoviesApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const searchMoviesByQuery = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchMoviesByQuery();
    } else {
      setMovies([]);
    }
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <MoviesForm onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
