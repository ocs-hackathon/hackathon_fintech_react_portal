import styles from "./Box.module.css";
// eslint-disable-next-line react/prop-types
function Box({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default Box;
