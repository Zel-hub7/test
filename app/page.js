"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export const mockValues = {
  name: "John Doe",
  username: "johndoe123",
  website: "www.johndoe.com",
  affiliateId: "AFF12345",
  schedulerId: "SCH45678",
  leader: "Team Lead",
  avatar: "https://example.com/avatar.jpg",
  bio: "Lorem ipsum dolor sit amet.",
};

export default function Home() {
  const router = useRouter();




  // State for form fields
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the form data matches mock values
    if (
      formData.username === mockValues.username &&
      formData.firstName === mockValues.firstName &&
      formData.lastName === mockValues.lastName &&
      formData.email === mockValues.email &&
      formData.password === mockValues.password &&
      formData.confirmPassword === mockValues.confirmPassword
    ) {
      // Navigate to the /Intro page
      router.push('/Intro');
    } else {
      alert('Please check your input values.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Logo Section */}
      <div className="mb-4 mt-7 text-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mx-auto mb-2"
        />
        <h2 className="text-white mb-5 text-3xl font-semibold">
          Create your FREE account NOW!!
        </h2>
        <p className="text-lg text-gray-300 mb-4 text-center">
          Create Your Account Below and Get{" "}
          <span className="text-orange-200">Free Access</span> to my Sales
          System that allows you to attract, capture and generate leads on
          autopilot.
        </p>
      </div>

      {/* Video Section with Golden Border Shadow */}
      <div className="w-full max-w-4xl mb-8">
        <video
          src="https://storage.googleapis.com/msgsndr/C6nqv5N0ZUkTMUIxNoYx/media/6638c58eb478503bf929064b.mp4"
          controls
          className="w-full h-auto rounded-lg border-[3px] border-[#F6AD55] shadow-[0_0_15px_rgba(255,215,0,0.8)] hover:shadow-[0_0_30px_rgba(255,215,0,1)] transition-transform transform hover:scale-105 duration-300 ease-in-out"
        />
      </div>

      {/* Form Section */}
      <form className="w-full max-w-2xl p-8 rounded-lg bg-opacity-0 bg-transparent" onSubmit={handleSubmit}>
        <p
          className="text-1xl font-semibold mb-9 text-center"
          style={{ color: "rgba(255, 255, 255, 0.57)" }}
        >
          (No previous experience or technical skills required)
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Username */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* First Name */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>

          {/* Confirmation Password */}
          <div className="col-span-2 sm:col-span-1">
            <label
              className="block text-white text-sm font-bold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none bg-transparent border-b border-white w-full py-1 leading-tight focus:outline-none"
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[50%] bg-gradient-to-r from-blue-500 via-blue-400 via-blue-500 to-gray-900 text-white font-bold py-2 px-4 rounded-full hover:scale-105 transform transition-all"
          >
            Register Now
          </button>
        </div>
      </form>

      {/* Footer Section: Image and Text Side by Side */}
      <div className="mt-8 flex items-center justify-center">
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/29cde1a02d3c42b3cea10665efcd9b93_1200_80-removebg-preview-e1713423263170.png"
          alt="Footer Image"
          className="w-32 h-auto mr-4"
        />
        <p className="text-white text-lg">
          Join our 20,000+ students worldwide
        </p>
      </div>
    </div>
  );
}
