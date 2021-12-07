import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  //observe wheather user auth state changed or not. observer hook.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error));
  };

  return {
    user,
    error,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
