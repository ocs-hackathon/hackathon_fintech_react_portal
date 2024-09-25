import UpdateForm from "../../features/authentication/update/UpdateForm";
import styles from "./Settings.module.css";
function Settings() {
  return (
    <div className={styles.settings}>
      <h1>Account</h1>
      <p
        style={{
          color: "var(--color-grey-500)",
          fontSize: "1.4rem",
          marginTop: "1rem",
        }}
      >
        Set your account settings down below
      </p>
      <UpdateForm />
    </div>
  );
}

export default Settings;
