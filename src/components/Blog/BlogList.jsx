import React, { useContext } from "react";
import BlogItem from "./BlogItem";
import { FirebaseContext } from "../../contexts/FirebaseContext";

const BlogList = () => {
  const { blogs, loading, error } = useContext(FirebaseContext);

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
