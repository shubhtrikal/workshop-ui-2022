import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import Workshops from '../components/Workshops/Workshops';

const Home: React.FC = () => {
  return (
    <div>
      <LandingPage />
      <Workshops />
      <Workshops />
    </div>
  );
};

export default Home;
