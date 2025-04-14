// import '../styles/Login.css';
// import '../App.css';

import { useState } from 'react';
import { LoginApi } from '../services/api';
import { storeUserData } from '../services/storage';
import { isAuthenticated } from '../services/auth';
import { Link, Navigate } from 'react-router-dom';
import NavBar from './Navbar';

export default function LoginPage() {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = initialStateErrors;
    let hasError = false;

    if (inputs.email === '') {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password === '') {
      errors.password.required = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
        })
        .catch((err) => {
          if (err.code === 'ERR_BAD_REQUEST') {
            setErrors({ ...errors, custom_error: 'Invalid Credentials.' });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setErrors({ ...errors });
  };

  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavBar />
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                onChange={handleInput}
              />
              {errors.email.required && (
                <span className="text-sm text-red-500">Email is required.</span>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                onChange={handleInput}
              />
              {errors.password.required && (
                <span className="text-sm text-red-500">
                  Password is required.
                </span>
              )}
            </div>

            {/* Error Message */}
            {errors.custom_error && (
              <div className="text-sm text-red-500">{errors.custom_error}</div>
            )}

            {/* Loading Spinner */}
            {loading && (
              <div className="text-center">
                <div
                  className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full text-blue-500"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={loading}
              >
                Login
              </button>
            </div>

            {/* Register Link */}
            <div className="text-sm text-center text-gray-600">
              Create a new account?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}