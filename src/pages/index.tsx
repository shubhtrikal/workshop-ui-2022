import { CssBaseline } from '@material-ui/core';
import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import FaqComponent from '../components/Faq/faq';
import WorkshopSection from '../components/Workshops/WorkshopSection';
import Footer from '../components/Footer/Footer';
import Prizes from '../components/Prizes/Prizes';

const Home: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <LandingPage />
      <WorkshopSection />
      <Prizes />
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Home;
