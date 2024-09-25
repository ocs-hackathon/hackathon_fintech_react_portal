import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useEffect } from "react";

import Logo from "../../ui/Logo/Logo";
import AuthForm from "../../features/authentication/AuthForm/AuthForm";

function Login() {
  const navigate = useNavigate();

  useEffect(function () {
    if (localStorage.getItem("admin_id")) navigate("/overview");
  });

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
