// app/account.js
"use client"; // Ensure this is included at the top

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserCircle,
  faGlobe,
  faIdCard,
  faCalendarCheck,
  faStar,
  faImage,
  faPen
} from "@fortawesome/free-solid-svg-icons";
import { mockValues } from "../page"; // Adjust the import path if needed

export default function AccountPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
