import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section className='landing-section'>
      <div className='landing-bg'></div>
      <div>
        <div className='landing-content'>
          <div className='hero-sponsors'>
            <img src='images/istewhite.png' alt='iste' width='100px' />
            <h1 style={{ margin: '0 20px', color: 'white' }}>&</h1>
            <img src='images/circle.png' alt='title-sponsor' width='100px' />
          </div>
          <h4>
            <span>Present</span>
          </h4>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>

          {/* <img
            src='images/techcrypters.png'
            alt='title-sponsor'
            width='150px'
          /> */}
          <h6>October 16 - October 20, 2021</h6>
          <a className='btn btn_hover' href='/register'>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
