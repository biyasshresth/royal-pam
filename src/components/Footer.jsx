import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-400 py-12 px-6 md:px-2 w-screen">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-orange-500 text-3xl mr-2">🏠</div>
            <h2 className="text-white text-xl font-bold">
              Royal Palm Real Estate
            </h2>
          </div>
          <p className="mb-6">
            Your trusted partner in finding the perfect property. We make real
            estate dreams come true.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 text-xl ml-12">
            <a
              href="https://www.facebook.com/profile.php?id=61571018523950"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white cursor-pointer" />
            </a>
            <FaTwitter className="hover:text-white cursor-pointer" />
            <a
              href="https://www.instagram.com/bhu.bhumi8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <a
              href="https://www.youtube.com/@Bhumi-f5s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/Buy" className="hover:text-white hover:underline">
                Buy Property
              </Link>
            </li>
            <li>
              <Link to="/Sell" className="hover:text-white hover:underline">
                Sale Property
              </Link>
            </li>
            <li className="hover:text-white hover:underline cursor-pointer">
              Rent Property
            </li>
            <li>
              <Link to="/PropMgnt" className="hover:text-white hover:underline">
                PropMngt
              </Link>
            </li>
            <li>
              <Link
                to="/MarketAnalysis"
                className="hover:text-white hover:underline"
              >
                MarketAnalysis
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/AboutUs" className="hover:text-white hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/OurTeam" className="hover:text-white hover:underline">
                Our teams
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/NewsBlogs"
                className="hover:text-white hover:underline"
              >
                News & Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
          <p className="mb-4">
            Subscribe to get the latest property updates and market insights.
          </p>
          <div className="bg-[#1f2937] p-4 rounded-lg space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none"
            />
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p className="mb-4 md:mb-0">
          © 2025 RoyalPalmRealEstate. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <span>
            <Link to="/Privacy" className="hover:text-white hover:underline">
              Privacy & Policy
            </Link>
          </span>
          <span>
            <Link
              to="/TermsPolicy"
              className="hover:text-white hover:underline"
            >
              Terms & Policy
            </Link>
          </span>
          <span>
            <Link
              to="/DataDeletion"
              className="hover:text-white hover:underline"
            >
              Data Deletion Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
