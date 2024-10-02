import styles from "./Doc.module.css";

function NoDocError() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}></div>
      <p className={styles.message}>No document uploaded!</p>
    </div>
  );
}

export default NoDocError;
