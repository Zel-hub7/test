// app/leaderboard/page.js
"use client"; 

import React from "react";

const LeaderboardPage = () => {
  // Sample data for leaderboard scores
  const scores = [
    { rank: 1, name: "Alice", score: 100 },
    { rank: 2, name: "Bob", score: 90 },
    { rank: 3, name: "Charlie", score: 80 },
  ];

  const renderTable = (title) => (
    <div className="bg-opacity-10 rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
      <h2 className="bg-[#2A4365] text-white text-lg font-semibold text-center p-4">{title}</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Rank</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Score</th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => (
            <tr key={score.rank} className="bg-transparent">
              <td className="border-t border-white px-4 py-2">{score.rank}</td>
              <td className="border-t border-white px-4 py-2">{score.name}</td>
              <td className="border-t border-white px-4 py-2">{score.score}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#2A4365]">Leaderboard</h1>
      <div className="flex space-x-6">
        {renderTable("Table 1")}
        {renderTable("Table 2")}
        {renderTable("Table 3")}
        {renderTable("Table 4")}
      </div>
    </div>
  );
};

export default LeaderboardPage;
