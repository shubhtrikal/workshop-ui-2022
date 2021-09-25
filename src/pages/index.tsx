import { CssBaseline } from '@material-ui/core';
import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import FaqComponent from '../components/Faq/faq';
import WorkshopSection from '../components/Workshops/WorkshopSection';
import Footer from '../components/Footer/Footer';
import Prizes from '../components/Prizes/Prizes';
import Mentor from '../components/Mentor';

const Home: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <LandingPage />
      <WorkshopSection />
      <Prizes />
      <Mentor />
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default Home;
