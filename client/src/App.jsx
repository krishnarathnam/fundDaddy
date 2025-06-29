import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import LoginPage from './component/Login.jsx';
import SignUpPage from './component/SignUp.jsx';
import CampaignDetails from "./component/CampaignDetails";
import AllCampaigns from "./component/AllCampaigns";
import CreateCampaign from "./component/CreateCampaign";
import Dashboard from "./component/Dashboard.jsx";
import DonatePage from "./component/DonatePage"; // ✅ NEW

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate" element={<DonatePage />} /> {/* ✅ NEW route */}
      </Routes>
    </Router>
  );
}
