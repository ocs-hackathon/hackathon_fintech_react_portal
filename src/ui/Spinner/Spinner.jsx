/* eslint-disable react/prop-types */
import styles from "./Spinner.module.css";
function Spinner({ type, color = "--color-primary" }) {
  return (
    <div
      className={styles.spinner}
      style={{
        background:
          `background: radial-gradient(farthest-side, var(${color}) 90%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, var(--color-primary))`,
        width: type === "small" ? ".5rem" : "6rem",
      }}
    ></div>
  );
}

export default Spinner;
