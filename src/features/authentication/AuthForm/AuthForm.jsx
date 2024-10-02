import { useState } from "react";

import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { HiLockClosed, HiOutlineMail } from "react-icons/hi";

import styles from "./AuthForm.module.css";
import { login, signup } from "../../../services/apiAdmin";
import Error from "../../../ui/Error/Error";
import { HiOutlineUser } from "react-icons/hi2";
import { useAppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AuthForm({ type }) {
  const { setAccessToken } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, register, formState, reset, setError } = useForm();
  const navigate = useNavigate();

  const { errors = {} } = formState;

  async function onSubmit(data) {
    setIsLoading(true);
    if (type === "signup") {
      const admin = await signup(data);
      return admin;
    }
    const admin = await login(data);

    const { errors = {} } = admin;
    const errorKey = Object.keys(errors).at(0);

    if (errorKey)
      setError(`${errorKey}`, {
        type: "manual",
        message: admin.errors[errorKey],
      });
    else {
      const { accessToken } = admin;
      setAccessToken(accessToken);
      if (data.remember) {
        localStorage.setItem("accessToken", accessToken);
      } else {
        sessionStorage.setItem("accessToken", accessToken);
      }
      navigate("/overview");
      reset();
    }
    setIsLoading(false);
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {type === "signup" && (
        <div className={styles.inputBox}>
          <label htmlFor="name">
            <HiOutlineUser />
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
        <label htmlFor="password">
          <HiLockClosed />
        </label>
        <input
          type={isVisible ? "text" : "password"}
          id="password"
          placeholder="Password"
          className={errors.password ? styles.error : ""}
          {...register("password", {
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
      {errors?.password && <Error message={errors.password.message} />}
      {type !== "signup" && (
        <div className={styles.inputCheckBox}>
          <input type="checkbox" id="remember" {...register("remember")} />
          <label htmlFor="remember">Remember me</label>
        </div>
      )}

      <button className={styles.btn} disabled={isLoading}>
        {isLoading
          ? `...Signing ${type === "signup" ? "up" : "in"}`
          : type === "signup"
          ? "Sign up"
          : "Sign in"}
      </button>
    </form>
  );
}

export default AuthForm;
