// src/contexts/FirebaseContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsCollection = collection(db, "blogs");
        const blogSnapshot = await getDocs(blogsCollection);
        const blogList = blogSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date?.toDate ? data.date.toDate() : data.date,
          };
        });
        setBlogs(blogList);
        setLoading(false);
      } catch (err) {
        setError("Algo ha salido mal al cargar los blogs.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <FirebaseContext.Provider value={{ blogs, loading, error }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
