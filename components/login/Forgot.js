import styles from "./Login.module.css";
import { useState } from "react";
import Link from "next/link";
import firebase from "../../firebase";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handleResetPassword = async e => {
    e.preventDefault();
    try {
      await firebase.resetPassword(email);
      setIsPasswordReset(true);
      setError(null);
    } catch (err) {
      console.error("Error sending email", err);
      setError(err.message);
      setIsPasswordReset(false);
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.space}></div>
      <h2 className={styles.h2}>Forgot Password?</h2>
      <form className={styles.form}>
        <p className={`${styles.text} ${styles.enter}`}>
          Enter your email address.
        </p>
        <input
          type="email"
          name={"email"}
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className={`${styles.input}`}
        />
        {isPasswordReset && (
          <p className={styles.passwordSuccess}>
            Check email to reset password.
          </p>
        )}
        {error && <p className={styles.error}>{error}</p>}
        <div>
          <button
            disabled={isSubmitting}
            className={styles.button}
            onClick={handleResetPassword}
          >
            Send Password Reset Email
          </button>
          <p className={`${styles.text} ${styles.signup}`}>
            Don't have a blog account yet?{" "}
            <Link href="/signup">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
        </div>
      </form>
      <div className={styles.backBtnPositioner}>
        <Link href="/signin">
          <a className={styles.backBtn}>&larr; Back</a>
        </Link>
      </div>
    </main>
  );
};

export default Forgot;
