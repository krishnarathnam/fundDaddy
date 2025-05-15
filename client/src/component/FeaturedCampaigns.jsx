import React, { useState } from "react";
import { Link } from "react-router-dom";

const badgeColors = {
  Tech: "bg-blue-100 text-blue-700",
  Medical: "bg-red-100 text-red-700",
  Education: "bg-yellow-100 text-yellow-700",
  Emergency: "bg-orange-100 text-orange-700",
  Animals: "bg-sky-100 text-sky-700"
};

const featuredProject = {
  title: "Tech for All: Rural Internet Access",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  organizer: "ConnectNow Foundation",
  description: "Bringing high-speed internet to underserved rural communities.",
  raised: 12000,
  goal: 20000,
  daysLeft: 15,
  fundedPercent: 60,
  tags: ["Tech", "Rural", "Internet"],
  location: "Iowa, USA"
};

export const recommendedCampaigns = [
  {
    id: 1,
    title: "Emergency Surgery for Bella",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80",
    organizer: "Sarah Lee",
    raised: 8500,
    goal: 10000,
    daysLeft: 7,
    fundedPercent: 85,
  },
  {
    id: 2,
    title: "Books for Every Child",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    organizer: "Read2Grow",
    raised: 4300,
    goal: 6000,
    daysLeft: 22,
    fundedPercent: 72,
  },
  {
    id: 3,
    title: "Wildlife Rescue Emergency Fund",
    category: "Animals",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    organizer: "WildCare",
    raised: 6700,
    goal: 10000,
    daysLeft: 12,
    fundedPercent: 67,
  },
  {
    id: 4,
    title: "Disaster Relief for Flood Victims",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    organizer: "ReliefNow",
    raised: 15000,
    goal: 25000,
    daysLeft: 5,
    fundedPercent: 60,
  },
  {
    id: 5,
    title: "STEM Kits for Girls",
    category: "Education",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    organizer: "GirlsInTech",
    raised: 3200,
    goal: 5000,
    daysLeft: 18,
    fundedPercent: 64,
  },
  {
    id: 6,
    title: "Mobile Health Clinic",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    organizer: "HealthOnWheels",
    raised: 9100,
    goal: 15000,
    daysLeft: 10,
    fundedPercent: 61,
  },
  {
    id: 7,
    title: "Animal Shelter Expansion",
    category: "Animals",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
    organizer: "SafePaws",
    raised: 5400,
    goal: 8000,
    daysLeft: 20,
    fundedPercent: 68,
  },
  {
    id: 8,
    title: "Earthquake Emergency Response",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    organizer: "QuakeAid",
    raised: 20000,
    goal: 30000,
    daysLeft: 3,
    fundedPercent: 67,
  }
];

const CAMPAIGNS_PER_PAGE = 4;

export default function FeaturedCampaigns() {
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(recommendedCampaigns.length / CAMPAIGNS_PER_PAGE);
  const paginated = recommendedCampaigns.slice(
    (page - 1) * CAMPAIGNS_PER_PAGE,
    page * CAMPAIGNS_PER_PAGE
  );

  return (
    <section className="w-full bg-[#fafafa] mx-auto  px-2 md:px-6 py-8">
        <div className="max-w-7xl mx-auto  px-2 md:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1 max-w-2xl flex flex-col h-full">
          <h3 className="uppercase text-xs font-bold text-gray-500 mb-2">Featured Project</h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
            <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-96 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sky-500">
                  <svg width="20" height="20" fill="currentColor" className="inline"><circle cx="10" cy="10" r="10"/></svg>
                </span>
                <span className="font-bold text-lg">{featuredProject.title}</span>
              </div>
              <div className="text-gray-500 text-sm mb-2">{featuredProject.organizer}</div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className="mr-2">⏰ {featuredProject.daysLeft} days left</span>
                <span>• {featuredProject.fundedPercent}% funded</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredProject.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs">{tag}</span>
                ))}
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">{featuredProject.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="uppercase text-xs font-bold text-gray-500 mb-2">Recommended For You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {paginated.map(c => (
              <Link to={`/campaign/${c.id}`} key={c.id}>
                <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col cursor-pointer">
                  <img src={c.image} alt={c.title} className="h-32 w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${badgeColors[c.category]}`}>
                      {c.category}
                    </div>
                    <h4 className="font-bold text-base mb-1 truncate">{c.title}</h4>
                    <div className="text-gray-500 text-xs mb-2 truncate">by {c.organizer}</div>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span className="mr-2">⏰ {c.daysLeft} days left</span>
                      <span>• {c.fundedPercent}% funded</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="h-2 rounded-full bg-sky-500"
                        style={{ width: `${c.fundedPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-full font-semibold ${
                  page === i + 1
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-sky-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}
