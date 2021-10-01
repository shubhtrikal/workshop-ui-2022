import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section className='landing-section'>
      <div className='landing-bg'></div>
      <div>
        <div className='landing-content'>
          <h4>ISTE SC MANIT</h4>
          <h4>
            <span>Presents</span>
          </h4>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>
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
