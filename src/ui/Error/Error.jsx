import { HiExclamationTriangle } from "react-icons/hi2";
import styles from "./Error.module.css";
function Error({ message }) {
  return (
    <p className={styles.error}>
      <HiExclamationTriangle />
      <span>{message}</span>
    </p>
  );
}

export default Error;
