import React from "react";
import { CheckBadgeIcon, CreditCardIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import image from "../assets/image.jpg";

export default function HomePage(){
  return (
    <div className="min-h-[700px] flex items-center justify-center bg-gradient-to-r from-sky-400 to-purple-400">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl p-5">
        <div className="flex-1 text-white md:pr-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-5 leading-tight">
            Fund Your<br />
            Dreams,<br />
            Help Others<br />
            Thrive
          </h1>
          <p className="mb-6 text-lg">
            The easiest way to raise money for your needs or support causes that matter to you. No platform fees, just genuine support.
          </p>
          <div className="flex gap-3 mb-6">
            <button className="bg-white text-sky-600 font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-sky-100 transition text-base">
              Start a Campaign
            </button>
            <button className="bg-white/80 text-sky-700 font-semibold px-5 py-2.5 rounded-lg shadow hover:bg-sky-200 transition text-base">
              Browse Campaigns
            </button>
          </div>
          <div className="flex gap-6 mt-3">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="w-5 h-5 text-white/80" />
              <span className="text-white/90 text-sm">Trusted Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckBadgeIcon className="w-5 h-5 text-white/80" />
              <span className="text-white/90 text-sm">Secure & Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="w-5 h-5 text-white/80" />
              <span className="text-white/90 text-sm">Fast Withdrawals</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <img src={image} alt="Fundraising" className="rounded-3xl shadow-2xl w-full max-w-md" />
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 bg-white rounded-xl shadow-xl px-4 py-3 flex flex-col gap-1 w-48 z-30">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-orange-500">$120</span>
              <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-1 rounded">Just now</span>
            </div>
            <span className="text-sm text-gray-700">New donation from<br />John D.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
