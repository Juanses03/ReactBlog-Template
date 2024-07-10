import React from "react";

const BlogItem = ({ blog, onEdit, onDelete }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      {blog.content.substring(0, 100)}...
    </p>
    {blog.image && (
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-32 object-cover mb-4"
      />
    )}
    <div className="flex justify-between">
      <button
        onClick={() => onEdit(blog)}
        className="px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(blog.id)}
        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
);

export default BlogItem;
