import React, { useState } from "react";
import { FaSearch, FaHome, FaCommentDots, FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">About GloBus</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Sell on GloBus</a></li>
            <li><a href="#" className="hover:underline">Affiliate Program</a></li>
            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="hover:underline">Fulfilment Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Returns Centre</a></li>
            <li><a href="#" className="hover:underline">Purchase Protection</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h3 className="font-bold mb-4">Download Our App</h3>
          <div className="flex space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-6 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} GloBus. All rights reserved.
        <div className="mt-2">
          <select className="bg-gray-700 text-white text-sm p-1 rounded">
            <option value="us">United States</option>
            <option value="bd">Bangladesh</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-15 w-80 h-[500px] rounded-2xl shadow-2xl bg-white flex flex-col overflow-hidden transition-all my-10">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              
              <span className="font-semibold">GloBus Support</span>
            </div>
            <button
              onClick={handleToggle}
              className="text-gray-300 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Hello Sajid!</h2>
            <p className="text-sm text-gray-600 mb-4">How can we help?</p>
            
            
          </div>
          <div className="bg-white border-t flex justify-around py-2">
            <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-sm">
              <FaHome className="mb-1" />
              Home
            </button>
            <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-sm relative">
              <FaCommentDots className="mb-1" />
              Messages
              <span className="absolute top-0 right-4 bg-red-500 text-white text-xs px-1 rounded-full">1</span>
            </button>
            <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-sm">
              <FaQuestionCircle className="mb-1" />
              Help
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handleToggle}
        className="fixed bottom-10 right-10 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
      >
        {isOpen ? "Close Chat" : "Contact Us"}
      </button>
    </footer>
  );
};

export default Footer;
