import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import image from "../assets/image.jpg";

export default function TrustSafety() {
  return (
    <section className="min-h-[300px] flex items-center justify-center bg-[#ece6fa] py-12">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl p-6 gap-8">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trust & Safety Guaranteed
          </h2>
          <p className="mb-6 text-gray-700 text-base">
            At FundDaddy, we prioritize the security of our users and donors. Our platform employs state-of-the-art security measures and AI-powered fraud detection to ensure all campaigns are legitimate and all donations reach their intended recipients.
          </p>
          <ul className="space-y-5 mb-8">
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <CheckCircleIcon className="w-7 h-7 text-sky-500" />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Secure Payments</span>
                <div className="text-gray-500 text-sm">All payment information is encrypted and processed securely.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <CheckCircleIcon className="w-7 h-7 text-sky-500" />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Fraud Prevention</span>
                <div className="text-gray-500 text-sm">AI-powered systems detect and prevent fraudulent campaigns.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <CheckCircleIcon className="w-7 h-7 text-sky-500" />
              </span>
              <div>
                <span className="font-semibold text-gray-900">24/7 Support</span>
                <div className="text-gray-500 text-sm">Our dedicated support team is always available to help.</div>
              </div>
            </li>
          </ul>
          <button className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-sky-100 transition">
            Learn More About Our Safety Measures
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center relative w-full max-w-xl">
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img
              src={image}
              alt="Trust & Safety"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 w-80 z-10">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <div className="text-gray-700 text-sm mb-1">
                "I was able to raise $15,000 for my mom's surgery in just 48 hours!"
              </div>
              <div className="text-xs text-sky-700 font-medium">- Michael K., Campaign Organizer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
