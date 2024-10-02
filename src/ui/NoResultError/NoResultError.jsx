/* eslint-disable react/prop-types */
import styles from "./NoResultError.module.css";
function NoResultError({ message = "No Data to display." }) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}></div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default NoResultError;
