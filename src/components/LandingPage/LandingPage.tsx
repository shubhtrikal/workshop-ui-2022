import React from 'react';
import styles from './styles.module.css';

const LandingPage: React.FC = () => {
  return (
    <section className={styles.landing}>
      <div
        className={styles.bg}
        style={{
          backgroundImage:
            'url(https://cdn.mos.cms.futurecdn.net/zdrejgM9d48DXmtA8ZH5c3.jpg)',
        }}
      ></div>
      <div>
        <div className={styles.content}>
          <h6>October 18 - October 19, 2021</h6>
          <h2>
            <span>Flair </span>Haven
            <br />
          </h2>
          <a className={`${styles.btn} ${styles.btn_hover}`} href='#'>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
