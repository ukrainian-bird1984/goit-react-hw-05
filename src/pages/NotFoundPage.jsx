import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <p className={css.allert}>error</p>
      <p className={css.page}>Page not found!</p>
      <Link to="/" className={css.url}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;