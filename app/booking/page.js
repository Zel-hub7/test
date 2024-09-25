// app/booking/page.js
"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faGlobe,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const BookingPage = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen p-4">
      {/* Logo at the top */}
      <img
        src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
        alt="Logo"
        className="w-24 h-auto mb-10"
      />

      {/* Outer Box */}
      <div className="bg-[#2C7A7B] p-8 rounded-lg shadow-lg mt-12 w-full max-w-md">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mb-4"
        />

        <h2 className="text-white text-3xl mb-8">Business Plan Call</h2>
        {/* Small Inner Box */}
        <div className="border border-white border-opacity-50 p-6 rounded-md">
          {/* Clock Icon and Text */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faClock} className="text-white mr-2" />
            <span className="text-white">12:30 PM</span>
          </div>

          {/* Calendar Icon and Date */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-white mr-2" />
            <span className="text-white">September 26, 2024</span>
          </div>

          {/* Earth Icon and GMT */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faGlobe} className="text-white mr-2" />
            <span className="text-white">GMT+3</span>
          </div>

          {/* Hamburger Icon and Random Text */}
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBars} className="text-white mr-2" />
            <span className="text-white">
              Schedule a time that works best for you
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
