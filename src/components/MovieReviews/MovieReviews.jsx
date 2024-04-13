import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieReviews } from "../../helpers/searchMoviesApi";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    const serchReviews = async () => {
      try {
        const data = await searchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    serchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <p className={css.error}>{error}</p>}
      <ul className={css.list}>
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3 className={css.author}>Author: {author}</h3>
              <p className={css.content}>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews;