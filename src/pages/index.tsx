import { CssBaseline } from '@material-ui/core';
import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import FaqComponent from '../components/Faq/faq';
import WorkshopSection from '../components/Workshops/WorkshopSection';

const Home: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <LandingPage />
      <WorkshopSection />
      <FaqComponent />
    </div>
  );
};

export default Home;
