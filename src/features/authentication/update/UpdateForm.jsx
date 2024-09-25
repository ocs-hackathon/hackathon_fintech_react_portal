import { useForm } from "react-hook-form";
import { useAppContext } from "../../../contexts/AppContext";
import styles from "./UpdateForm.module.css";
import { updateAdmin } from "../../../services/apiAdmin";
function UpdateForm() {
  const { admin } = useAppContext();
  const { register, handleSubmit,reset } = useForm();
  function onSubmit(data) {
    updateAdmin(data);
    reset();
  }
  return (
    <div className={styles.update}>
      <div className={styles.avatar}>
        <img src="../../../public/avatar.png" alt="admin-avatar" />
        <p>{name}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Name</p>
          <input type="text" placeholder={admin.name} {...register("name")} />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            placeholder={admin.email}
            {...register("email")}
          />
        </div>
        <div>
          <p>Current Password</p>
          <input type="password" {...register("currPass")} />
        </div>
        <div>
          <p>New Password</p>
          <input type="password" {...register("newPass")} />
        </div>
        <button className={styles.btn} type="submit">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
