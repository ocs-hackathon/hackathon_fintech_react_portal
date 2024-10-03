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
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
function AuthForm({ type }) {
  const { setAccessToken, accessToken } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { handleSubmit, register, formState, reset, setError } = useForm();
  const navigate = useNavigate();

  const { mutate: logIn, isPending: isSigningIn } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      const { errors = {}, accessToken = "" } = data;
      const errorKey = Object.keys(errors).at(0);
      if (errorKey) {
        setError(`${errorKey}`, {
          type: "manual",
          message: data.errors[errorKey],
        });
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Signed in successfully!");
      setAccessToken(accessToken);
      rememberMe && localStorage.setItem("accessToken", accessToken);
      !rememberMe && sessionStorage.setItem("accessToken", accessToken);
      navigate("/overview");
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Oops something went wrong. Please try again.");
    },
  });

  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      const { errors = {} } = data;
      const errorKey = Object.keys(errors).at(0);
      if (errorKey) {
        setError(`${errorKey}`, {
          type: "manual",
          message: data.errors[errorKey],
        });
        return;
      }
      toast.success("Sign up went successful. Please login to continue!");
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");
      navigate("/login");
    },
    onError: (err) => {
      console.error(err.message);
      toast.error("Oops something went wrong. Please try again.");
    },
  });

  const { errors = {} } = formState;

  async function onSubmit(data) {
    if (type === "signup") signUp({ data, accessToken, reset });
    logIn(data);
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
            {...register("fullName", {
              required: "This field is required",
            })}
          />
        </div>
      )}
      {errors?.fullName && <Error message={errors.fullName.message} />}
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
      {type !== "signup" && (
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
      )}
      {errors?.password && <Error message={errors.password.message} />}
      {type !== "signup" && (
        <div className={styles.inputCheckBox}>
          <input
            type="checkbox"
            id="remember"
            value={rememberMe}
            onChange={() => setRememberMe((state) => !state)}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
      )}

      <button className={styles.btn} disabled={isSigningIn || isSigningUp}>
        {isSigningIn || isSigningUp
          ? type === "signup"
            ? "...Signning up"
            : "...Signing in"
          : type === "signup"
          ? "Sign up"
          : "Sign in"}
      </button>
    </form>
  );
}

export default AuthForm;
