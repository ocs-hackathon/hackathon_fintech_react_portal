import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useEffect } from "react";

import Logo from "../../ui/Logo/Logo";
import AuthForm from "../../features/authentication/AuthForm/AuthForm";
import { useAuthenticate } from "../../features/authentication/useAuthenticate";
import { useAppContext } from "../../contexts/AppContext";

function Login() {
  const { setIsAuthed } = useAppContext();
  const res = useAuthenticate();
  const navigate = useNavigate();

  useEffect(() => {
    if (res.ok) {
      navigate(-1);
      setIsAuthed(true);
    }
  }, [navigate, res, setIsAuthed]);

  return (
    <div className={styles.login}>
      <div className={styles.leftBg}></div>
      <div className={styles.wrapper}>
        <Logo />
        <h1 className={styles.heading}>Sign In</h1>
        <AuthForm />
      </div>
    </div>
  );
}

export default Login;
