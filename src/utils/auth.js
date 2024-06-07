// Logout / auth
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return { user, logOut };
};
