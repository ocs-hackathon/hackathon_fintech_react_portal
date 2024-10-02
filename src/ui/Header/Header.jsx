import { useNavigate } from "react-router-dom";

import { HiMoon } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";

import styles from "./Header.module.css";
import { useAppContext } from "../../contexts/AppContext";

function Header() {
  const { isDarkMode, toggleDarkMode } = useAppContext();
  const navigate = useNavigate();
  const { admin } = useAppContext();

  function logout() {
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div className={styles.header}>
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="../../../public/avatar.png"
          alt="avatar-admin"
        />
        <span className={styles.admin}>{admin.name}</span>
      </div>
      <div className={styles.icons}>
        {isDarkMode ? (
          <IoMdSunny onClick={() => toggleDarkMode((mode) => !mode)} />
        ) : (
          <HiMoon onClick={() => toggleDarkMode((mode) => !mode)} />
        )}
        <MdOutlineLogout onClick={logout} />
      </div>
    </div>
  );
}

export default Header;
