import css from "./MoviesForm.module.css";

const MoviesForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget.elements.name.value;
    if (!form) return;
    onSubmit(form);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.submit}>
      <input
        className={css.type}
        type="text"
        name="name"
        placeholder="Search movies..."
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default MoviesForm;