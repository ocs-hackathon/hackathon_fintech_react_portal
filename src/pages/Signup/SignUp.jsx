import styles from "../Login/Login.module.css";
import AuthForm from "../../features/authentication/AuthForm/AuthForm";
import Logo from "../../ui/Logo/Logo";

function SignUp() {
  return (
    <div className={styles.login}>
      <div className={styles.leftBg}></div>
      <div className={styles.wrapper}>
        <Logo />
        <h1 className={styles.heading}>Sign Up</h1>
        <AuthForm type={"signup"} />
      </div>
    </div>
  );
}

export default SignUp;
