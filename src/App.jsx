import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Header from "./components/header";
import "./App.css";
import BuyPage from "./components/BuyPage";
import Sell from "./components/Sell";
import Rent from "./components/Rent";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import VisitWithPartners from "./components/VisitWithPartners";
import PlotOffer from "./components/PlotOffer";
import MarketAnalysis from "./components/MarketAnalysis";
import PropMgnt from "./components/PropMngt";
import HeroBanner from "./components/HeroBanner";
import InvestmentConsult from "./components/InvestmentConsult";
import MortageService from "./components/MortageService";
import TermsPolicy from "./components/TermsPolicy";
import Privacy from "./components/Privacy";
import DataDeletion from "./components/DataDeletion";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import NewsBlogs from "./components/NewsBlogs";
import DowntownPlot from "./components/Newsblogs/DowntownPlots";
import DownTown from "./components/Newsblogs/DownTown";
import OurTeam from "./components/OurTeam";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BuyPage" element={<BuyPage />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Rent" element={<Rent />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Faq" element={<Faq />} />
        <Route
          path="/Login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/visit" element={<VisitWithPartners />} />
        <Route path="/VisitWithPartners" element={<VisitWithPartners />} />
        <Route path="/plot-offer" element={<PlotOffer />} />
        <Route path="/MarketAnalysis" element={<MarketAnalysis />} />
        <Route path="/PropMgnt" element={<PropMgnt />} />
        <Route path="/HeroBanner" element={<HeroBanner />} />
        <Route path="/InvestmentConsult" element={<InvestmentConsult />} />
        <Route path="/MortageService" element={<MortageService />} />
        <Route path="/TermsPolicy" element={<TermsPolicy />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/DataDeletion" element={<DataDeletion />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/NewsBlogs" element={<NewsBlogs />} />
        <Route path="/DownTown" element={<DownTown />} />
        <Route path="/Downtownplot" element={<DowntownPlot />} />
        <Route path="/OurTeam" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default App;

 