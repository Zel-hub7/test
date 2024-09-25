"use client";

import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faDesktop,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function TrainingPage() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-col items-center mb-9 mt-4 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-5"
        />
        <h2 className="text-white text-3xl font-semibold">Step 1</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mt-12 mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://github.com/Zel-hub7/music_player/blob/master/Thumbnail.PNG?raw=true"
            alt="Training Image"
            className="w-full h-40 object-cover mb-4"
          />

          {/* Wrap icon and text in a flex container */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faStar}
              className="text-[#030712]-900 mr-2"
            />
            <h2 className="text-2xl font-semibold">Quick Start</h2>
          </div>

          <p className="mb-4 text-center">
            This is a description of Training 1. It is a great opportunity to
            enhance your skills and knowledge in the field.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 2. Dive deep into this training to
            get practical experience.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all self-center">
            Quick Start
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://github.com/Zel-hub7/music_player/blob/master/Thumbnail.PNG?raw=true"
            alt="Training Image"
            className="w-full h-40 object-cover mb-4"
          />

          {/* Wrap icon and text in a flex container */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faDesktop}
              className="text-[#030712]-900 mr-2"
            />
            <h2 className="text-2xl font-semibold">Organic Training</h2>
          </div>

          <p className="mb-4 text-center">
            This is a description of Training 2. Dive deep into this training to
            get practical experience.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all self-center">
            Organic Training
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105">
          <img
            src="https://github.com/Zel-hub7/music_player/blob/master/Thumbnail.PNG?raw=true"
            alt="Training Image"
            className="w-full h-40 object-cover mb-4"
          />

          {/* Wrap icon and text in a flex container */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-[#030712]-900 mr-2"
            />
            <h2 className="text-2xl font-semibold">Paid Training</h2>
          </div>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <p className="mb-4 text-center">
            This is a description of Training 3. Take this training to sharpen
            your abilities and broaden your knowledge.
          </p>

          <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all self-center">
            Paid Training
          </button>
        </div>
      </div>
    </div>
  );
}
