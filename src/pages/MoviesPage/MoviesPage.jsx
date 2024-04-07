import { useParams, useSearchParams } from "react-router-dom";
import MoviesForm from "../../components/MoviesForm/MoviesForm";
import { useEffect, useState } from "react";
import { searchMovies } from "../../helpers/searchMoviesApi";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(movieId);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieId.toLowerCase())
  );

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const searchMoviesByQuery = async () => {
      try {
        const data = await searchMovies(searchParams.get("query"));
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMoviesByQuery();
  }, [movieId]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <MoviesForm onSubmit={handleSubmit} />
      <MovieList movies={filteredMovies} />
    </>
  );
};

export default MoviesPage;