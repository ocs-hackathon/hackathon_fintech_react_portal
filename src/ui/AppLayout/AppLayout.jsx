import Header from "../Header/Header";
import styles from "./AppLayout.module.css";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <SideBar />
    </div>
  );
}

export default AppLayout;
