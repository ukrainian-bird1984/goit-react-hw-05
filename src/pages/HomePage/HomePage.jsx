import { useEffect, useState } from "react";
import { searchTrendingMovies } from "../../helpers/searchMoviesApi";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const searchByTrendingCountries = async () => {
      try {
        const data = await searchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchByTrendingCountries();
  }, []);

  return (
    <section className={css.section}>
      <h2 className={css.name}>Trending today</h2>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      {movies && <MovieList movies={movies} />}
    </section>
  );
};

export default HomePage;