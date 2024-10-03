import { useNavigate } from "react-router-dom";

import { useAppContext } from "../../contexts/AppContext";

import styles from "./Login.module.css";
import Logo from "../../ui/Logo/Logo";
import AuthForm from "../../features/authentication/AuthForm/AuthForm";

function Login() {
  const { setIsAuthed } = useAppContext();
  const navigate = useNavigate();
  if (
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken")
  ) {
    setIsAuthed(true);
    navigate("/overview");
  }

  return (
    <div className={styles.login}>
      <div className={styles.leftBg}></div>
      <div className={styles.wrapper}>
        <Logo />
        <h1 className={styles.heading}>Sign In</h1>
        <AuthForm type="login" />
      </div>
    </div>
  );
}

export default Login;
