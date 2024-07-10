import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionCookie = Cookies.get("session");
    if (sessionCookie) {
      const validateSession = async () => {
        const userDoc = await getDoc(doc(db, "users", sessionCookie));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          Cookies.remove("session");
        }
      };
      validateSession();
    }
  }, []);

  const register = async ({ name, username, emailOrPhone, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailOrPhone,
        password
      );
      const userId = userCredential.user.uid;

      await setDoc(doc(db, "users", userId), {
        name,
        username,
        emailOrPhone,
        userId,
      });

      setUser({ name, username, emailOrPhone, userId });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.error("Error during registration: Email already in use");
      } else {
        console.error("Error during registration:", error);
      }
      throw error;
    }
  };

  const login = async (emailOrPhone, password, rememberMe) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailOrPhone,
        password
      );
      const userId = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        setUser(userDoc.data());
        if (rememberMe) {
          Cookies.set("session", userId, { expires: 7 });
        } else {
          Cookies.set("session", userId);
        }
        return userDoc.data(); // Devuelve los datos del usuario si el login es exitoso
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error; // Lanza el error para que el componente Login lo maneje
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      Cookies.remove("session");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
