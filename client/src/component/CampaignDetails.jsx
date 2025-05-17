import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
      const response = await axios.get(`http://localhost:5000/api/campaigns/${id}`);
      setCampaign(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching campaign details:', error);
      setError(error.response?.data?.message || 'Failed to load campaign details. Please try again.');
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
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
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

  const progress = Math.min((campaign.raisedAmount / campaign.targetAmount) * 100, 100);
  const daysLeft = Math.ceil((new Date(campaign.endDate) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100">
        <div className="relative h-[70vh]">
          <img
            src={campaign.image || 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-8 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">{campaign.title}</h1>
                <div className="flex items-center justify-center gap-4">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm">
                    {campaign.category}
                  </span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm">
                    {campaign.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Campaign Progress</h2>
                    <p className="text-gray-500 mt-2">Help us reach our goal</p>
                  </div>
                  <span className={`px-6 py-3 rounded-full text-sm font-medium ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'successful' ? 'bg-blue-100 text-blue-800' :
                    campaign.status === 'failed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status ? campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1) : 'Pending'}
                  </span>
                </div>
                <div className="space-y-8">
                  <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-6 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">
                        ${campaign.raisedAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">Raised</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">
                        ${campaign.targetAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">Goal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">
                        {daysLeft}
                      </div>
                      <div className="text-sm text-gray-500 mt-2">Days Left</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Campaign Details</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Category</h4>
                      <p className="text-lg text-gray-900 mt-2">{campaign.category}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Location</h4>
                      <p className="text-lg text-gray-900 mt-2">{campaign.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">End Date</h4>
                      <p className="text-lg text-gray-900 mt-2">{new Date(campaign.endDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Created By</h4>
                      <p className="text-lg text-gray-900 mt-2">{campaign.creator?.name || 'Anonymous'}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">About this Campaign</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {campaign.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl">
                    {error}
                  </div>
                )}
                <form onSubmit={handleDonate} className="space-y-6">
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Donation Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                      <input
                        type="number"
                        id="amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="Enter amount"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 rounded-xl transition duration-300 text-lg"
                  >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
