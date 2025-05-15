import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import NavBar from "./NavBar";

export default function CampaignDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  useEffect(() => {
    fetchCampaignDetails();
  }, [id]);

  const fetchCampaignDetails = async () => {
    try {
      console.log('Fetching campaign details for ID:', id);
      const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`);
      console.log('Campaign details response:', response.data);
      setCampaign(response.data);
    } catch (error) {
      console.error('Error fetching campaign details:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        setError(`Failed to load campaign details: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError('No response from server. Please check your connection.');
      } else {
        console.error('Error setting up request:', error.message);
        setError('Failed to load campaign details. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!donationAmount || donationAmount <= 0) {
      setError('Please enter a valid donation amount');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post(
        `http://localhost:5000/api/campaigns/${id}/donate`,
        { amount: Number(donationAmount) },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Refresh campaign details after successful donation
      fetchCampaignDetails();
      setDonationAmount('');
      setError('');
    } catch (error) {
      console.error('Error making donation:', error);
      setError(error.response?.data?.message || 'Failed to process donation. Please try again.');
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-gray-600">Loading campaign details...</div>
        </div>
      </>
    );
  }

  if (error && !campaign) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </>
    );
  }

  if (!campaign) {
    return (
      <>
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-xl text-gray-600">Campaign not found</div>
        </div>
      </>
    );
  }

  const progress = (campaign.raisedAmount / campaign.targetAmount) * 100;
  const daysLeft = Math.ceil((new Date(campaign.endDate) - new Date()) / (1000 * 60 * 60 * 24));

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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Campaign Header */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-96">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center px-4">
                  {campaign.title}
                </h1>
              </div>
            </div>

            <div className="p-8">
              {/* Campaign Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">
                    ${campaign.raisedAmount.toLocaleString()}
                  </div>
                  <div className="text-gray-600">raised of ${campaign.targetAmount.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">
                    {Math.round(progress)}%
                  </div>
                  <div className="text-gray-600">funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">
                    {daysLeft}
                  </div>
                  <div className="text-gray-600">days left</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
                <div
                  className="bg-sky-500 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Campaign Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">About this campaign</h2>
                  <p className="text-gray-700 mb-6">{campaign.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Category</h3>
                      <p className="text-gray-600">{campaign.category}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">{campaign.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">End Date</h3>
                      <p className="text-gray-600">{new Date(campaign.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                {/* Donation Form */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
                  {error && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleDonate} className="space-y-4">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Donation Amount ($)
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="1"
                        step="1"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                        placeholder="Enter amount"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Donate Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
    </>
  );
}
