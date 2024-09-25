// app/booking/page.js
"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faGlobe,
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.setMonth(selectedDate.getMonth() + 1)
    );
    setSelectedDate(new Date(nextMonth));
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      selectedDate.setMonth(selectedDate.getMonth() - 1)
    );
    setSelectedDate(new Date(prevMonth));
  };

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <img
        src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
        alt="Logo"
        className="w-24 h-auto mb-10"
      />

      <div className="bg-[#166862] p-8 rounded-lg shadow-lg mt-12 w-full max-w-md">
        <h2 className="text-white text-3xl mb-8">Business Plan Call</h2>

        <div className="border border-white border-opacity-50 p-6 rounded-md">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faClock} className="text-white mr-2" />
            <span className="text-white">12:30 PM</span>
          </div>

          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-white mr-2" />
            <span className="text-white">Selected Month:</span>
          </div>

          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faGlobe} className="text-white mr-2" />
            <span className="text-white">GMT+3</span>
          </div>

          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faBars} className="text-white mr-2" />
            <span className="text-white">
              Schedule a time that works best for you
            </span>
          </div>
        </div>
          {/* Move the Select Date and Time text here */}
          <h1 className="text-white text-xl mt-4 mb-4">Select Date and Time</h1>

          {/* Calendar */}
          <div className="flex items-center justify-center ml-2 mb-4">
            <button
              onClick={handlePrevMonth}
              className="text-white bg-[#2F855A] rounded-full p-2 hover:bg-[#388e3c] transition duration-200"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className="text-white mx-2">
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={handleNextMonth}
              className="text-white bg-[#2F855A] rounded-full p-2 hover:bg-[#388e3c] transition duration-200"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: daysInMonth }, (_, day) => (
              <div
                key={day}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#2F855A] text-white cursor-pointer hover:bg-[#388e3c] transition duration-200"
                onClick={() =>
                  console.log(
                    `Selected date: ${day + 1} ${selectedDate.toLocaleString(
                      "default",
                      { month: "long" }
                    )} ${selectedDate.getFullYear()}`
                  )
                }
              >
                {day + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
 
  );
};

export default BookingPage;
