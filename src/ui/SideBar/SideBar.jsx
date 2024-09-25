import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <NavBar />
    </div>
  );
}

export default SideBar;
