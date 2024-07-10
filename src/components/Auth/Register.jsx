import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await register({ name, username, emailOrPhone, password });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else {
        setError("An error occurred during registration");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
        Register
      </h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="emailOrPhone"
        >
          Email or Phone
        </label>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          placeholder="Email or Phone"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4 relative">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-600 dark:text-gray-400"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-gray-200 mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
