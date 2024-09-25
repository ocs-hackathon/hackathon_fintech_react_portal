import { useState } from "react";

import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { HiLockClosed, HiOutlineMail } from "react-icons/hi";

import styles from "./AuthForm.module.css";
import { login, signup } from "../../../services/apiAdmin";
import Error from "../../../ui/Error/Error";
import { useAppContext } from "../../../contexts/AppContext";

// eslint-disable-next-line react/prop-types
function AuthForm({ type }) {
  const { setAdmin } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const { handleSubmit, register, formState, reset } = useForm();
  const { errors = {} } = formState;

  async function onSubmit(data) {
    reset();
    if (type === "signup") {
      const admin = await signup(data);
      return admin;
    }
    const admin = await login({
      ...data,
      remember: data.remember ? true : false,
    });
    setAdmin(admin);
  }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {type === "signup" && (
        <div className={styles.inputBox}>
          <label htmlFor="name">
            <HiOutlineMail />
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={errors.name ? styles.error : ""}
            {...register("name", {
              required: "This field is required",
            })}
          />
        </div>
      )}
      <div className={styles.inputBox}>
        <label htmlFor="email">
          <HiOutlineMail />
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className={errors.email ? styles.error : ""}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </div>
      {errors?.email && <Error message={errors.email.message} />}
      <div className={styles.inputBox}>
        <label htmlFor="pass">
          <HiLockClosed />
        </label>
        <input
          type={isVisible ? "text" : "password"}
          id="pass"
          placeholder="Password"
          className={errors.pass ? styles.error : ""}
          {...register("pass", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Please lengthen the character",
            },
          })}
        />
        <button
          className={styles.eyeIcon}
          onClick={(e) => {
            e.preventDefault();
            setIsVisible((state) => !state);
          }}
        >
          {isVisible ? <IoEyeSharp /> : <IoEyeOffSharp />}
        </button>
      </div>
      {errors?.pass && <Error message={errors.pass.message} />}
      {type !== "signup" && (
        <div className={styles.inputCheckBox}>
          <input type="checkbox" id="remember" {...register("remember")} />
          <label htmlFor="remember">Remember me</label>
        </div>
      )}

      <button className={styles.btn}>
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </form>
  );
}

export default AuthForm;
