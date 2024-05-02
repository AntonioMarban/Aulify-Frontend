import React from 'react';
import LeaderboardTable from '../../components/LeaderboardTable/LeaderboardTable';
import Navbar from '../../components/Navbar/Navbar';
import './LeaderboardPage.css'; 

function LeaderboardPage() {
  return (
    <div className="leaderboard-page">
      <Navbar />
      <div className="card-container">
        <LeaderboardTable />
      </div>
    </div>
  );
}

export default LeaderboardPage;