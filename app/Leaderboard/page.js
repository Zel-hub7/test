// app/leaderboard/page.js
"use client";

import React from "react";
import Navbar from "../components/Navbar";

const LeaderboardPage = () => {
  // Sample data for leaderboard scores
  const scores = [
    { rank: 1, name: "Alice", score: 100 },
    { rank: 2, name: "Bob", score: 90 },
    { rank: 3, name: "Charlie", score: 80 },
  ];

  const renderTable = (title) => (
    <div className="bg-opacity-10 rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#2A4365] text-white">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr key={score.rank} className="bg-transparent">
              <td className="border-t border-white px-4 py-2 text-white">
                {score.rank}
              </td>
              <td className="border-t border-white px-4 py-2 text-white">
                {score.name}
              </td>
              <td className="border-t border-white px-4 py-2 text-white">
                {score.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <div className="flex items-center justify-center w-full py-4">
        {/* Logo in the center top */}
        <img
          src="https://rippleeffectfree.com/wp-content/uploads/2024/04/logo-bg-remove-extra.png"
          alt="Logo"
          className="w-24 h-auto mr-4"
        />
        {/* Navbar next to the logo */}
        <Navbar />
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-white">Leaderboard</h1>
      
      <div className="flex space-x-6">
        {renderTable("Today")}
        {renderTable("Last 7 Days")}
        {renderTable("Last 30 Days")}
        {renderTable("All Time")}
      </div>
    </div>
  );
};

export default LeaderboardPage;
