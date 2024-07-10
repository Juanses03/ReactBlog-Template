import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BlogForm = ({ blog, onSave }) => {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [content, setContent] = useState(blog ? blog.content : "");
  const [image, setImage] = useState(blog ? blog.image : "");
  const [previewImage, setPreviewImage] = useState(blog ? blog.image : "");
  const [isUploading, setIsUploading] = useState(false);
  const { user } = useContext(FirebaseContext);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImage(blog.image);
      setPreviewImage(blog.image);
    }
  }, [blog]);

  const handleImageUpload = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    let imageUrl = image;

    if (image && image instanceof File) {
      imageUrl = await handleImageUpload(image);
    }

    const newBlog = {
      title,
      content,
      image: imageUrl,
      author: user.username,
      date: new Date().toISOString(),
      userId: user.userId,
    };

    onSave(newBlog);
    setIsUploading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          rows="6"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2">
          Image
        </label>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
          }}
          className="w-full"
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="mt-4 w-full h-64 object-cover"
          />
        )}
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          disabled={isUploading}
        >
          {isUploading ? "Saving..." : "Save Blog"}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
