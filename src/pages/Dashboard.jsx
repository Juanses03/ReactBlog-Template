import React, { useState } from "react";
import BlogForm from "../components/Dashboard/BlogForm";
import UserBlogList from "../components/Dashboard/UserBlogList";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Dashboard = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSaveBlog = async (blog) => {
    if (selectedBlog) {
      // Update blog
      await updateDoc(doc(db, "blogs", selectedBlog.id), blog);
    } else {
      // Add new blog
      await addDoc(collection(db, "blogs"), blog);
    }
    setSelectedBlog(null);
  };

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <div className="mb-6">
        <BlogForm blog={selectedBlog} onSave={handleSaveBlog} />
      </div>
      <UserBlogList onEdit={handleEditBlog} />
    </div>
  );
};

export default Dashboard;
