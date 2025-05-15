import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

// Fallback campaign data
const fallbackCampaigns = [
  {
    _id: "1",
    title: "Help Build a School in Rural India",
    description: "Support education for underprivileged children by helping us build a new school in rural India. This project will provide quality education to over 200 children annually.",
    category: "Education",
    targetAmount: 50000,
    raisedAmount: 25000,
    location: "Rural India",
    endDate: "2024-12-31",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "1",
    status: "active"
  },
  {
    _id: "2",
    title: "Save the Endangered Tigers",
    description: "Help protect endangered tigers and their natural habitat through conservation efforts. Your support will fund anti-poaching units and habitat restoration.",
    category: "Animals",
    targetAmount: 75000,
    raisedAmount: 75000,
    location: "Southeast Asia",
    endDate: "2024-11-30",
    image: "https://images.unsplash.com/photo-1534567110353-1f46f72192e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "2",
    status: "successful"
  },
  {
    _id: "3",
    title: "Clean Ocean Initiative",
    description: "Join our mission to clean up ocean pollution and protect marine life. We'll deploy cleanup vessels and implement waste management systems in coastal communities.",
    category: "Environment",
    targetAmount: 100000,
    raisedAmount: 60000,
    location: "Pacific Coast",
    endDate: "2024-10-31",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "3",
    status: "active"
  },
  {
    _id: "4",
    title: "Medical Aid for Rural Communities",
    description: "Provide essential medical supplies and healthcare services to rural communities. This initiative will establish mobile clinics and train local healthcare workers.",
    category: "Medical",
    targetAmount: 30000,
    raisedAmount: 15000,
    location: "Sub-Saharan Africa",
    endDate: "2024-09-30",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "4",
    status: "pending"
  },
  {
    _id: "5",
    title: "Tech Education for Youth",
    description: "Empower young people with technology education and coding skills. We'll provide laptops, internet access, and professional mentorship to underprivileged students.",
    category: "Technology",
    targetAmount: 40000,
    raisedAmount: 20000,
    location: "Urban Centers",
    endDate: "2024-08-31",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "5",
    status: "active"
  },
  {
    _id: "6",
    title: "Wildlife Conservation Project",
    description: "Support our efforts to protect endangered wildlife species and their habitats. Your contribution will fund research, conservation programs, and community education.",
    category: "Animals",
    targetAmount: 60000,
    raisedAmount: 35000,
    location: "Amazon Rainforest",
    endDate: "2024-07-31",
    image: "https://images.unsplash.com/photo-1534567110353-1f46f72192e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "6",
    status: "active"
  },
  {
    _id: "7",
    title: "Emergency Relief for Flood Victims",
    description: "Provide immediate assistance to communities affected by recent floods. Your support will help with food, shelter, and rebuilding efforts.",
    category: "Emergency",
    targetAmount: 80000,
    raisedAmount: 55000,
    location: "Flood-Affected Regions",
    endDate: "2024-06-30",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "7",
    status: "active"
  },
  {
    _id: "8",
    title: "Solar Power for Rural Schools",
    description: "Install solar power systems in rural schools to provide reliable electricity and enable digital learning. This will benefit over 500 students across 5 schools.",
    category: "Technology",
    targetAmount: 45000,
    raisedAmount: 28000,
    location: "Rural Communities",
    endDate: "2024-05-31",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "8",
    status: "active"
  },
  {
    _id: "9",
    title: "Mental Health Support Program",
    description: "Establish a mental health support program for youth, providing counseling services and creating awareness about mental well-being in schools and communities.",
    category: "Medical",
    targetAmount: 35000,
    raisedAmount: 18000,
    location: "Urban Centers",
    endDate: "2024-04-30",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "9",
    status: "pending"
  },
  {
    _id: "10",
    title: "Urban Garden Initiative",
    description: "Create community gardens in urban areas to promote sustainable living and provide fresh produce to local communities. This project will establish 10 community gardens.",
    category: "Environment",
    targetAmount: 25000,
    raisedAmount: 12000,
    location: "Urban Areas",
    endDate: "2024-03-31",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    creator: "10",
    status: "failed"
  }
];

export default function AllCampaigns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = ["All", "Animals", "Education", "Medical", "Environment", "Technology", "Emergency"];

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/campaigns');
      if (response.data && response.data.length > 0) {
        setCampaigns(response.data);
      } else {
        setCampaigns(fallbackCampaigns);
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      setError('Failed to load campaigns. Showing sample campaigns instead.');
      setCampaigns(fallbackCampaigns);
    } finally {
      setLoading(false);
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => 
    selectedCategory === "All" || campaign.category === selectedCategory
  );

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.endDate) - new Date(a.endDate);
      case "oldest":
        return new Date(a.endDate) - new Date(b.endDate);
      case "mostFunded":
        return b.raisedAmount - a.raisedAmount;
      case "endingSoon":
        return new Date(a.endDate) - new Date(b.endDate);
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading campaigns...</div>
        </div>
      </>
    );
  }

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

        {error && (
          <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            {error}
          </div>
        )}

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
                  className="w-full h-48 object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'successful' ? 'bg-blue-100 text-blue-800' :
                    campaign.status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status ? campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1) : 'Pending'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {campaign.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{campaign.category}</span>
                  <span>{campaign.location}</span>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-sky-500 h-2 rounded-full"
                      style={{
                        width: `${(campaign.raisedAmount / campaign.targetAmount) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-gray-600">
                      ${campaign.raisedAmount.toLocaleString()} raised
                    </span>
                    <span className="text-gray-600">
                      of ${campaign.targetAmount.toLocaleString()}
                    </span>
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