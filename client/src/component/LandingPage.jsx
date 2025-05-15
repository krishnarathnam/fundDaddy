import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import FeaturedCampaigns from "./FeaturedCampaigns";
import HowItWorks from "./HowItWorks";
import TrustSafety from "./TrustSafety";
import SearchByCategory from "./SearchByCategory";
import Footer from "./Footer";

export default function LandingPage() {
  return (
  <>
  <NavBar />
  <div className='flex flex-col gap-10'>
    <HomePage />
    <FeaturedCampaigns />
    <HowItWorks />
    <TrustSafety />
    <SearchByCategory />
    <Footer />
  </div>
  </>
  )
}

