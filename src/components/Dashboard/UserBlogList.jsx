import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import BlogItem from "./BlogItem";

const UserBlogList = ({ onEdit }) => {
  const { user } = useContext(FirebaseContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (user && user.userId) {
        const q = query(
          collection(db, "blogs"),
          where("userId", "==", user.userId)
        );
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBlogs(blogsData);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [user]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Please log in to see your blogs.</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          blog={blog}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default UserBlogList;
