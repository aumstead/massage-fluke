
import FirebaseContext from "./FirebaseContext";
import firebase from './firebase'
import useAuth from "../components/auth/useAuth";

const FirebaseProvider = props => {
  const user = useAuth();

  

  return (
    <FirebaseContext.Provider
      value={{
        user,
        firebase
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
