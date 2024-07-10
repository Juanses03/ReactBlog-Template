import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../contexts/FirebaseContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(FirebaseContext);
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const formattedDate =
    blog.date && blog.date.toDate
      ? blog.date.toDate().toLocaleDateString()
      : blog.date;

  return (
    <div className="container mx-auto p-4 lg:p-8">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <h1 className="text-4xl font-bold mb-2 dark:text-white">{blog.title}</h1>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>
          By {blog.author} on {formattedDate} - {blog.views} views
        </span>
      </div>
      <div className="prose prose-lg dark:prose-dark">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
