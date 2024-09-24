"use client"; // Add this line to mark the component as a Client Component

import { useState } from "react";

export default function BookingPage() {
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBooking = async () => {
    const response = await fetch("https://cribcrm.com/api/v1/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your_token_here", // Add your authorization token here
      },
      body: JSON.stringify({
        timezone,
        email,
        start_time: startTime,
        end_time: endTime,
      }),
    });

    if (response.ok) {
      // Handle success (e.g., show a success message)
      console.log("Booking successful!");
    } else {
      // Handle error (e.g., show an error message)
      console.error("Booking failed:", response.statusText);
    }
  };

  return (
    <div>
      <h1>Book a Call</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="text"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        placeholder="Enter your timezone"
      />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}
