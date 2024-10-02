/* eslint-disable react/prop-types */
import styles from "./NoResultError.module.css";
function NoResultError({ message = "No data to be displayed." }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default NoResultError;
