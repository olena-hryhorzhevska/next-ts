"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register, RegisterRequest } from "../../lib/api";
import { ApiError } from "@/app/api/api";
import { useAuthStore } from "@/app/lib/store/authStore";
import styles from './page.module.css';

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const setUser = useAuthStore((state)=> state.setUser)

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as RegisterRequest;
      const res = await register(formValues);
      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          "Oops... some error",
      );
    }
  };

  return (
    <div className={styles.authPage}>
      <form action={handleSubmit} className={styles.authForm}>
        <h1 className={styles.authHeading}>Create your NoteLab account</h1>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>
            Username
            <input className={styles.formInput} type="text" name="userName" required />
          </label>
          <label className={styles.formLabel}>
            Email
            <input className={styles.formInput} type="email" name="email" required />
          </label>
          <label className={styles.formLabel}>
            Password
            <input className={styles.formInput} type="password" name="password" required />
          </label>
        </div>
        <button className={styles.submitButton} type="submit">Register</button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default SignUp;
