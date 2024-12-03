import styles from "../Login/Login.module.css";
import AuthForm from "../../features/authentication/AuthForm/AuthForm";
import Logo from "../../ui/Logo/Logo";
import { useAppContext } from "../../contexts/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { isAuthed } = useAppContext();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthed) navigate("/login");
    },
    [isAuthed, navigate]
  );

  return (
    <div className={styles.login}>
      <div className={styles.leftBg}></div>
      <div className={styles.wrapper}>
        <Logo />
        <h1 className={styles.heading} style={{ fontSize: "4rem" }}>
          Create Account
        </h1>
        <AuthForm type={"signup"} />
      </div>
    </div>
  );
}

export default SignUp;
