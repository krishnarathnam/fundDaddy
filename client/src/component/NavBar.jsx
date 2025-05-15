import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full bg-white flex items-center justify-between px-8 py-3 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-2xl font-bold">
            <span className="text-sky-500">Fund</span>
            <span className="text-purple-500">Daddy</span>
          </span>
        </Link>
      </div>

      <div className="flex-1 flex justify-center mx-8">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-[320px]">
          <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search campaigns..."
            className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/campaigns" className="font-semibold text-gray-900 hover:text-sky-500 transition">Discover</Link>
        <a 
          href="#how-it-works" 
          onClick={scrollToHowItWorks}
          className="font-semibold text-gray-900 hover:text-sky-500 transition"
        >
          How It Works
        </a>
        <Link to="/login" className="font-normal text-gray-900 hover:text-sky-500 transition">Log In</Link>
        <Link 
          to="/create-campaign" 
          className="ml-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-xl transition"
        >
          Start a Campaign
        </Link>
      </div>
    </nav>
  );
}