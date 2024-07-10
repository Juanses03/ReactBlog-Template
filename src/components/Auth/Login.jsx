import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await login(emailOrPhone, password, rememberMe);
      if (userData) {
        navigate("/dashboard"); // Redirigir al dashboard
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else {
        setError("An error occurred during login");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">
        Login
      </h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
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
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2"
        />
        <label
          htmlFor="rememberMe"
          className="text-gray-700 dark:text-gray-200"
        >
          Remember me
        </label>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
      <div className="text-center">
        <Link
          to="/forgot-password"
          className="text-blue-500 hover:underline dark:text-blue-400"
        >
          Forgot your password?
        </Link>
      </div>
    </form>
  );
};

export default Login;
