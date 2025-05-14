import React from "react";
import BlobBackground from "./BlobBackground";

export default function LoginPage() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <BlobBackground />
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform hover:scale-105 transition duration-300 z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-sky-500">Fund</span>
            <span className="text-purple-500">Daddy</span>
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Log in to your account.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-sky-500 hover:text-sky-700 transition">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-sky-500 hover:text-sky-700 font-semibold transition">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
