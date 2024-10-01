import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <h1>Oops!</h1>
      <p className={styles.title}>404 - Page not found</p>
      <p className={styles.desc}>
        The page you are looking for might have been removed, had its name
        changed or unavailable
      </p>
      <button className={styles.btn} onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default PageNotFound;
