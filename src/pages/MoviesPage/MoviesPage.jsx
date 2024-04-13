import { useSearchParams } from "react-router-dom";
import MoviesForm from "../../components/MoviesForm/MoviesForm";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { searchMoviesByQuery } from "../../helpers/searchMoviesApi";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const searchMovies = async () => {
      try {
        const data = await searchMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <MoviesForm onSubmit={handleSubmit} />
      {query && <MovieList movies={filteredMovies} />}
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
    </>
  );
};

export default MoviesPage;