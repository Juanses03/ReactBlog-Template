import React from "react";
import Register from "../components/Auth/Register";

const RegisterPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-md w-full">
      <Register />
    </div>
  </div>
);

export default RegisterPage;
