import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

// Static campaign data
const initialCampaigns = [
  {
    _id: 1,
    title: "Help Build a School in Rural India",
    description: "Support education for underprivileged children by helping us build a new school in rural India.",
    category: "Education",
    targetAmount: 50000,
    raisedAmount: 25000,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: 2,
    title: "Save the Endangered Tigers",
    description: "Help protect endangered tigers and their natural habitat through conservation efforts.",
    category: "Animals",
    targetAmount: 75000,
    raisedAmount: 45000,
    image: "https://images.unsplash.com/photo-1534567110353-1f46f72192e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: 3,
    title: "Clean Ocean Initiative",
    description: "Join our mission to clean up ocean pollution and protect marine life.",
    category: "Environment",
    targetAmount: 100000,
    raisedAmount: 60000,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: 4,
    title: "Medical Aid for Rural Communities",
    description: "Provide essential medical supplies and healthcare services to rural communities.",
    category: "Medical",
    targetAmount: 30000,
    raisedAmount: 15000,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: 5,
    title: "Tech Education for Youth",
    description: "Empower young people with technology education and coding skills.",
    category: "Technology",
    targetAmount: 40000,
    raisedAmount: 20000,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: 6,
    title: "Wildlife Conservation Project",
    description: "Support our efforts to protect endangered wildlife species and their habitats.",
    category: "Animals",
    targetAmount: 60000,
    raisedAmount: 35000,
    image: "https://images.unsplash.com/photo-1534567110353-1f46f72192e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function AllCampaigns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [campaigns] = useState(initialCampaigns);

  const categories = ["All", "Animals", "Education", "Medical", "Environment", "Technology"];

  const filteredCampaigns = campaigns.filter(campaign => 
    selectedCategory === "All" || campaign.category === selectedCategory
  );

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b._id - a._id;
      case "oldest":
        return a._id - b._id;
      case "mostFunded":
        return b.raisedAmount - a.raisedAmount;
      case "endingSoon":
        return 0;
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
              key={campaign._id}
              to={`/campaign/${campaign._id}`}
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
                      style={{ width: `${(campaign.raisedAmount / campaign.targetAmount) * 100}%` }}
                    ></div>
                  </div>
                  {/* Stats */}
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-bold text-sky-500">
                        ${campaign.raisedAmount.toLocaleString()}
                      </span>
                      <span className="text-gray-600"> raised</span>
                    </div>
                    <div className="text-gray-600">
                      of ${campaign.targetAmount.toLocaleString()}
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