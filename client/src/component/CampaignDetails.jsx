import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";
import { recommendedCampaigns } from "./FeaturedCampaigns";
import NavBar from "./NavBar";

export default function CampaignDetails() {
  const { id } = useParams();
  // Find the campaign by ID
  const campaign = recommendedCampaigns.find(c => c.id === Number(id));

  if (!campaign) return <div className="text-center py-20 text-2xl">Campaign not found.</div>;

  // Example: Attach a dailyDonations array to each campaign (in real app, this would come from backend)
  const dailyDonations = [
    { date: "Mar 1", amount: 1200 },
    { date: "Mar 2", amount: 850 },
    { date: "Mar 3", amount: 1500 },
    { date: "Mar 4", amount: 950 },
    { date: "Mar 5", amount: 1800 },
    { date: "Mar 6", amount: 2100 },
    { date: "Mar 7", amount: 1300 },
    { date: "Mar 8", amount: 1750 },
    { date: "Mar 9", amount: 2200 },
    { date: "Mar 10", amount: 1600 },
    { date: "Mar 11", amount: 1900 },
    { date: "Mar 12", amount: 1400 },
    { date: "Mar 13", amount: 2300 },
    { date: "Mar 14", amount: 1700 },
    { date: "Mar 15", amount: 2000 },
    { date: "Mar 16", amount: 1450 },
    { date: "Mar 17", amount: 1850 },
    { date: "Mar 18", amount: 2100 },
    { date: "Mar 19", amount: 1650 },
    { date: "Mar 20", amount: 1950 },
    { date: "Mar 21", amount: 1200 },
    { date: "Mar 22", amount: 850 },
    { date: "Mar 23", amount: 1500 },
    { date: "Mar 24", amount: 950 },
    { date: "Mar 25", amount: 1800 },
    { date: "Mar 26", amount: 2100 },
    { date: "Mar 27", amount: 1300 },
    { date: "Mar 28", amount: 1750 },
    { date: "Mar 29", amount: 2200 },
    { date: "Mar 30", amount: 1600 },
    { date: "Mar 31", amount: 1900 },
    { date: "Apr 1", amount: 1400 },
    { date: "Apr 2", amount: 2300 },
    { date: "Apr 3", amount: 1700 },
    { date: "Apr 4", amount: 2000 },
    { date: "Apr 5", amount: 1450 },
    { date: "Apr 6", amount: 1850 },
    { date: "Apr 7", amount: 2100 },
    { date: "Apr 8", amount: 1650 },
    { date: "Apr 9", amount: 1950 }
  ];

  return (
    <>
    <NavBar />
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-6xl mb-3 mx-auto my-0 font-bold text-center">{campaign.title}</h1>
      <p className="text-gray-600 mb-10 text-center">
        by {campaign.organizer}
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="rounded-xl w-full object-cover mb-4"
            style={{ maxHeight: 400 }}
          />
          <div className="flex gap-2 mb-4">
            <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">{campaign.category}</span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{campaign.location || "Location"}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">About this project</h2>
          <p className="text-gray-700 mb-4">
            {campaign.description}
          </p>
        </div>
        {/* Right: Stats and actions */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow p-6 mb-4 flex flex-col justify-between" style={{ height: 400 }}>
            <div>
              <div className="text-3xl font-bold text-sky-500 mb-2">${campaign.raised.toLocaleString()}</div>
              <div className="text-gray-600 mb-4">pledged of ${campaign.goal.toLocaleString()} goal</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-sky-500 h-2 rounded-full" 
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black mt-7 mb-7">
                  {Math.floor(campaign.raised / 100)} backers
                </div>
                <div className="text-3xl font-bold text-black">
                  {campaign.daysLeft} days to go
                </div>
              </div>
            </div>
            <div>
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition mb-3">
                Back this project
              </button>
              <div className="flex gap-2 justify-center">
                <button className="bg-gray-100 flex-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Remind me</button>
                <button className="bg-gray-100 flex-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition">Share</button>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center">
            All or nothing. This project will only be funded if it reaches its goal by the deadline.
          </div>
        </div>
      </div>

      {/* Daily Donations Chart - Full Width */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Daily Donations</h3>
        <div className="bg-white rounded-xl shadow p-6">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dailyDonations} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fill: '#6b7280' }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar 
                dataKey="amount" 
                fill="#0ea5e9" 
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </>
  );
}
