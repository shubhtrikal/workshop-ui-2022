import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section className="landing-section">
      <div className="landing-bg"></div>
      <div>
        <div className="landing-content">
          <h6>October 18 - October 19, 2021</h6>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>
          <a className="btn btn_hover" href="/register">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
