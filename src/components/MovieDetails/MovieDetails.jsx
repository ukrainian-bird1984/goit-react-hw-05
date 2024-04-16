import css from "./MovieDetails.module.css";

const MovieDetails = ({ movies }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movies;

  const defaultImg =
    "https://vovkasolovev.ru/wp-content/uploads/2019/04/marvel-full-movie-list.jpg";

  return (
    <section className={css.container}>
      <div>
        <img
          className={css.poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </div>
      <div className={css.containerText}>
        <h2 className={css.title}>{`${title} (${
          release_date.split("-")[0]
        })`}</h2>
        <p>{`User Store: ${Math.round(vote_average * 10)}%`}</p>
        <h3 className={css.overview}>Overview</h3>
        <p>{overview}</p>
        <h3 className={css.genres}>Genres</h3>
        <p>{genres.map((gen) => gen.name).join(", ")}</p>
      </div>
    </section>
  );
};

export default MovieDetails;