import { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./Login.module.css";

// logic begins in form input fields as user types.
function Login() {
  const router = useRouter();

  // see if user is logged in and if so push to /blog/create
  firebase.auth.onAuthStateChanged(function(user) {
    if (user) {
      router.push("/blog/create");
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [firebaseError, setFirebaseError] = useState(null);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticateUser();
        
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  async function authenticateUser() {
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      setSubmitting(false);
      router.push("/blog/create");
    } catch (error) {
      console.error("Authentication error", error);
      setFirebaseError(error.message);
      setSubmitting(false);
    }
  }

  function validateLogin(values) {
    let errors = {};

    // email errors
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address.";
    }
    // password errors
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);
    setSubmitting(true);
    setLoggingIn(true);
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.space}></div>
      <h2 className={styles.h2}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={`${styles.text} ${styles.enter}`}>
          Enter your email address and password.
        </p>
        <input
          type="email"
          name={"email"}
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          className={`${styles.input}`}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input
          type="password"
          name={"password"}
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          className={`${styles.input} ${styles.passwordInput}`}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        {firebaseError && <p className={styles.error}>{firebaseError}</p>}
        <Link href="/forgot">
          <a className={styles.forgot}>Forgot your password?</a>
        </Link>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={isSubmitting ? styles.button__disabled : styles.button}
          >
            Submit
          </button>
          <p className={`${styles.text} ${styles.signup}`}>
            Don't have a blog account yet?{" "}
            <Link href="/signup">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
