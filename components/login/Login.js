import { useState, useEffect } from "react";
import firebase from "../../firebase"
import {useRouter} from "next/router"

// logic begins in form input fields as user types.
function Login() {
  const router = useRouter();

  const [login, setLogin] = useState(true);
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [firebaseError, setFirebaseError] = useState(null)

  useEffect(() => {
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        authenticateUser()
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [errors])

  async function authenticateUser() {
    const {name, email, password} = values;
    try {
      login 
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password)
      router.push("/blog/create")
    } catch (error) {
      console.error("Authentication error", error)
      setFirebaseError(error.message)
    }
  }

  function validateLogin(values) {
    let errors = {}

    // email errors
    if(!values.email) {
      errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address"
    }
    // password errors
    if (!values.password) {
      errors.password = "Password required"
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    return errors;
  }

  function handleBlur() {
    const validationErrors = validateLogin(values)
    setErrors(validationErrors)
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateLogin(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <h2>{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        {!login && (
          <input
            type="text"
            name={'name'}
            value={values.name}
            placeholder="Your name"
            onChange={handleChange}
            
          />
        )}
        <input
          type="email"
          name={'email'}
          value={values.email}
          placeholder="Your email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name={'password'}
          value={values.password}
          placeholder="Your password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p>{errors.password}</p>}
        {firebaseError && <p>{firebaseError}</p>}
        <div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
          <button
            type="button"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login
              ? "I need to create an account."
              : "I already have an account."}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
