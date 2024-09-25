import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
}

export default Main;
