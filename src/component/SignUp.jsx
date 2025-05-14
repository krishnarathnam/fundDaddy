import React from "react";
import BlobBackground from "./BlobBackground";

const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+91", name: "India" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
];

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BlobBackground />
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 transform hover:scale-105 transition duration-300 z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-sky-500">Fund</span>
            <span className="text-purple-500">Daddy</span>
          </h1>
          <p className="text-gray-600 mt-2">Create your account to get started.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              placeholder="Enter your name"
            />
          </div>
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                className="px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition bg-white"
                defaultValue={countryCodes[0].code}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                placeholder="Enter your phone number"
              />
            </div>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white font-semibold py-2 rounded-lg hover:bg-sky-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-sky-500 hover:text-sky-700 font-semibold transition">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
