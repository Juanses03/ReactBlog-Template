import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const formattedDate =
    blog.date && blog.date.toDate
      ? blog.date.toDate().toLocaleDateString()
      : blog.date;

  return (
    <Link to={`/blog/${blog.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.content}</p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span>
            By {blog.author} on {formattedDate} - {blog.views} views
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
