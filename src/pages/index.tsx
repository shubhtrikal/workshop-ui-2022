import { CssBaseline } from '@material-ui/core';
import React from 'react';
import LandingPage from '../components/LandingPage/LandingPage';
import Workshops from '../components/Workshops/Workshops';

const Home: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <LandingPage />
      <Workshops />
      <Workshops />
    </div>
  );
};

export default Home;
