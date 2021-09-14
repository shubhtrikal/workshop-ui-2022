import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import Workshops from '../components/Workshops/Workshops';
import FaqComponent from '../components/Faq/faq';

const Home: React.FC = () => {
  return (
    <div>
      <LandingPage />
      <Workshops />
      <Workshops />
      <FaqComponent />
    </div>
  );
};

export default Home;
