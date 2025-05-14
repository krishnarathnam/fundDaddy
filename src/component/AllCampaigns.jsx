import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { recommendedCampaigns } from "./FeaturedCampaigns";

export default function AllCampaigns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", "Animals", "Education", "Medical", "Environment", "Technology"];

  const filteredCampaigns = recommendedCampaigns.filter(campaign => 
    selectedCategory === "All" || campaign.category === selectedCategory
  );

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;
      case "oldest":
        return a.id - b.id;
      case "mostFunded":
        return b.raised - a.raised;
      case "endingSoon":
        return a.daysLeft - b.daysLeft;
      default:
        return 0;
    }
  });

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Campaigns</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore and support innovative projects that are making a difference. From technology to education,
            find the perfect campaign to back.
          </p>
        </div>

        {/* Filters and Sort Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${selectedCategory === category
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="mostFunded">Most Funded</option>
            <option value="endingSoon">Ending Soon</option>
          </select>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCampaigns.map((campaign) => (
            <Link
              key={campaign.id}
              to={`/campaign/${campaign.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {campaign.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-500 transition">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {campaign.description}
                </p>
                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-sky-500 h-2 rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                  {/* Stats */}
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-bold text-sky-500">${campaign.raised.toLocaleString()}</span>
                      <span className="text-gray-600"> raised</span>
                    </div>
                    <div className="text-gray-600">
                      {campaign.daysLeft} days left
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedCampaigns.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </>
  );
} 