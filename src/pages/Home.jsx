import React from "react";
import BlogList from "../components/Blog/BlogList";

const Home = () => (
  <div className="container mx-auto p-4">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-4xl font-bold dark:text-white">Blog Home</h1>
    </div>
    <BlogList />
  </div>
);

export default Home;
