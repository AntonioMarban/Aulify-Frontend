// HomePage.jsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Cards/Card/Card';
import TotalUserCountCard from '../../components/Cards/TotalUserCountCard/TotalUserCountCard';
import TotalSessionCountCard from '../../components/Cards/TotalSessionCountCard/TotalSessionCountCard';
import PlatformCard from '../../components/Cards/PlatformCard/PlatformCard';
import SessionActivityChart from '../../components/Cards/SessionActivityCard/SessionActivityCard';
import AulifyUserCountCard from '../../components/Cards/AulifyUserCountCard/AulifyUserCountCard';
import UserAgeDistributionCard from '../../components/Cards/UserAgeDistributionCard/UserAgeDistributionCard';
import SessionActivityChartLast30Days from '../../components/Cards/SessionActivityChartLast30Days/SessionActivityChartLast30Days';
import AverageSessionDurationCard from '../../components/Cards/AverageSessionDurationCard/AverageSessionDurationCard';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="card-container">
        <AulifyUserCountCard />
        <TotalUserCountCard/>
        <TotalSessionCountCard/>
        <UserAgeDistributionCard />
        <AverageSessionDurationCard />
        <SessionActivityChart/> 
        <SessionActivityChartLast30Days />
      </div>
    </div>
  );
}

export default HomePage;
