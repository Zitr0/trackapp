import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to the Tracking App</h1>
      <button onClick={() => navigate('/track')} className="home-button">Track a Package</button>
      <button onClick={() => navigate('/history')} className="home-button">View History</button>
    </div>
  );
};

export default Home;
