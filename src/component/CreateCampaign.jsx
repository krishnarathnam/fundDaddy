import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goalAmount: '',
    category: '',
    endDate: '',
    images: [],
    story: '',
    location: '',
    beneficiaryName: '',
    beneficiaryRelation: ''
  });

  const [imagePreview, setImagePreview] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      alert('You can only upload up to 3 images');
      return;
    }

    setFormData(prev => ({
      ...prev,
      images: files
    }));

    // Create preview URLs
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Create Your Campaign</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campaign Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Campaign Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Campaign Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Short Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="3"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            {/* Goal Amount */}
            <div>
              <label htmlFor="goalAmount" className="block text-sm font-medium text-gray-700">
                Goal Amount ($)
              </label>
              <input
                type="number"
                name="goalAmount"
                id="goalAmount"
                required
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.goalAmount}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="medical">Medical</option>
                <option value="education">Education</option>
                <option value="emergency">Emergency</option>
                <option value="memorial">Memorial</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* End Date */}
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Campaign End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            {/* Images Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Campaign Images (Max 3)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                    >
                      <span>Upload images</span>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {/* Image Previews */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {imagePreview.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="h-32 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Story */}
            <div>
              <label htmlFor="story" className="block text-sm font-medium text-gray-700">
                Your Story
              </label>
              <textarea
                name="story"
                id="story"
                rows="6"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.story}
                onChange={handleChange}
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Beneficiary Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Beneficiary Information</h3>
              <div>
                <label htmlFor="beneficiaryName" className="block text-sm font-medium text-gray-700">
                  Beneficiary Name
                </label>
                <input
                  type="text"
                  name="beneficiaryName"
                  id="beneficiaryName"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  value={formData.beneficiaryName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="beneficiaryRelation" className="block text-sm font-medium text-gray-700">
                  Your Relation to Beneficiary
                </label>
                <input
                  type="text"
                  name="beneficiaryRelation"
                  id="beneficiaryRelation"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                  value={formData.beneficiaryRelation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 