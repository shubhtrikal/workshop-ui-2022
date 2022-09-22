import { fontSize } from '@mui/system';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section className='landing-section'>
      <div className='landing-bg'></div>
      <div>
        <div className='landing-content'>
          <div className='hero-sponsors'>
            <a href='https://istemanit.in/' target='_blank'>
              <img src='images/iste-white.svg' alt='iste' width='150px' />
            </a>
            <h1 style={{ margin: '0 20px', color: 'white', fontSize: '32px' }}>
              &
            </h1>
            <a href='https://bit.ly/3Updcil' target='_blank'>
              <img src='images/codingninja.png' alt='title-sponsor' width='150px' />
            </a>
          </div>
          <h4>
            <span style={{ fontSize: '20px' }}>Present</span>
          </h4>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>
          <h6 style={{ margin: '0 0 0 0'}}>Workshop 1: Sep 24 - Sep 25, 2022</h6>
          <h6>Workshop 2: Oct 1 - Oct 2, 2022</h6>
          <a className='btn btn_hover' href='/register'>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
