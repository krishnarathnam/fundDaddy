import React from "react";
import { FaFacebookF, FaTwitter, FaRegSmile, FaRegGrinAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 pt-0">
      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-sky-400 to-purple-400 py-20 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Ready to Start Your Campaign?
        </h2>
        <p className="text-lg text-white/90 text-center mb-8 max-w-2xl">
          Join thousands of people who have successfully funded their dreams and made a difference with FundDaddy.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition">
            Start a Campaign
          </button>
          <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg text-lg transition hover:bg-white hover:text-sky-600">
            Learn More
          </button>
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <div className="text-2xl font-bold mb-2">
            <span className="text-sky-400">Fund</span>
            <span className="text-orange-500">Daddy</span>
          </div>
          <p className="text-gray-300 mb-4">
            Helping individuals and organizations raise money for the causes they care about.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaRegSmile /></a>
            <a href="#" className="hover:text-white"><FaRegGrinAlt /></a>
          </div>
        </div>
        {/* For Fundraisers */}
        <div>
          <div className="font-bold text-lg mb-3">For Fundraisers</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">How it Works</a></li>
            <li><a href="#" className="hover:text-white">Why FundDaddy</a></li>
            <li><a href="#" className="hover:text-white">Success Stories</a></li>
            <li><a href="#" className="hover:text-white">Fees & Pricing</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
          </ul>
        </div>
        {/* For Donors */}
        <div>
          <div className="font-bold text-lg mb-3">For Donors</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Find Campaigns</a></li>
            <li><a href="#" className="hover:text-white">Your Donations</a></li>
            <li><a href="#" className="hover:text-white">Donation Safety</a></li>
            <li><a href="#" className="hover:text-white">Tax Deductions</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-bold text-lg mb-3">Company</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <span>© 2025 FundDaddy Inc. All rights reserved.</span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
