import React from "react";
import { PlusCircleIcon, ShareIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">How FundDaddy Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Creating and managing your fundraiser is simple and straightforward. Get started in just a few steps.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-10">
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <PlusCircleIcon className="w-10 h-10 text-sky-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">Create Your Campaign</h3>
            <p className="text-gray-600">
              Start your fundraiser in minutes. Add photos, your story, and set your goal.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <ShareIcon className="w-10 h-10 text-sky-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">Share with Friends</h3>
            <p className="text-gray-600">
              Share your campaign on social media, email, and text message to rally support.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <BanknotesIcon className="w-10 h-10 text-sky-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">Manage & Withdraw Funds</h3>
            <p className="text-gray-600">
              Collect donations straight to your bank account, with easy tracking and withdrawals.
            </p>
          </div>
        </div>
        <Link 
          to="/create-campaign"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Start Your Campaign
        </Link>
      </div>
    </section>
  );
}


