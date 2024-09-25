// app/account.js
"use client"; 

import { useState } from "react"; // Import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faGlobe,
  faIdCard,
  faCalendarCheck,
  faStar,
  faImage,
  faPen,
  faInfoCircle,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { mockValues } from "../page"; 
import Navbar from "../components/Navbar";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState(null); // State to track the active tab

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="mb-4 mt-7 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-2"
        />
        <h2 className="text-white mb-5 text-3xl font-semibold">
          Account
        </h2>
      </div>

      {/* Text Information Above the Box */}
      <div className="mb-4 flex items-center text-left w-full max-w-4xl">
        <div
          onClick={() => setActiveTab("information")} // Set active tab on click
          className={`flex items-center cursor-pointer p-2 rounded-lg ${
            activeTab === "information" ? "bg-white" : ""
          }`}
        >
          <h3 className="text-xl font-bold text-black mr-2">Information</h3>
          <FontAwesomeIcon icon={faInfoCircle} className="text-black" />
        </div>
        <div
          onClick={() => setActiveTab("edit")} // Set active tab on click
          className={`flex items-center cursor-pointer p-2 rounded-lg ${
            activeTab === "edit" ? "bg-white" : ""
          }`}
        >
          <h3 className="text-xl font-bold text-black mr-2">Edit</h3>
          <FontAwesomeIcon icon={faEdit} className="text-black" />
        </div>
      </div>

      <div className="bg-white border border-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Icons for the first row */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.name}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUserCircle} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.username}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faGlobe} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.website}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Icons for the second row */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faIdCard} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.affiliateId}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faCalendarCheck} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.schedulerId}</span>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faStar} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.leader}</span>
          </div>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faImage} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.avatar}</span>
          </div>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPen} className="text-4xl mb-2" />
            <span className="text-center">{mockValues.bio}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
