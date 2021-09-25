import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarked,
  faMobile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Box, Container } from '@material-ui/core';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth='lg'>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          className='footer-section'
          spacing={4}
        >
          <Grid item xs={12} sm={6} md={4} className='footerLeft'>
            <div className='logo'>
              <img src='images/iste-white.svg' alt='iste-logo' />
            </div>
            <div className='social-icon'>
              <div className='icon'>
                <a href='https://www.instagram.com/istemanit' target='_blank'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='social-media fa-2x'
                  />
                </a>
              </div>
              <div className='icon'>
                <a href='https://www.facebook.com/ISTESCMANIT' target='_blank'>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='social-media fa-2x'
                  />
                </a>
              </div>
              <div className='icon'>
                <a
                  href='https://www.linkedin.com/company/iste-sc-manit'
                  target='_blank'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className='social-media fa-2x'
                  />
                </a>
              </div>
              <div className='icon'>
                <a href='https://mobile.twitter.com/iste_manit' target='_blank'>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className='social-media fa-2x'
                  />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className='footerMiddle'>
            <div className='address'>
              <h2 className='footer-heading'>
                <span>
                  <i>
                    <FontAwesomeIcon icon={faMapMarked} />
                  </i>
                </span>
                ADDRESS
              </h2>
              <p>
                <a
                  className='link'
                  href='https://goo.gl/maps/nTNnuX6w5YbGKTic7'
                  target='blank'
                >
                  Maulana Azad National
                  <br />
                  Institute of Technology,
                  <br /> Bhopal
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className='footerRight'>
            <div className='mail'>
              <h2 className='footer-heading'>
                <span>
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                </span>
                EMAIL ADDRESS
              </h2>
              <p>
                <a href='mailto:istescmanit@gmail.com'>istescmanit@gmail.com</a>
              </p>
            </div>
            <div className='contact'>
              <h2 className='footer-heading'>
                <span>
                  <i>
                    <FontAwesomeIcon icon={faMobile} />
                  </i>
                </span>
                CONTACT
              </h2>
              <p>
                <a href='tel://9140160345'>
                  <i aria-hidden='true'>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  Aushotosh Bose <br />
                  +91 9140160345
                </a>
              </p>
              <br />
              <p>
                <a href='tel://9617820009'>
                  <i aria-hidden='true'>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  Shivam Bansal <br />
                  +91 9617820009
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
        <Box className='footer-privacy'>
          <ul>
            <a href='#'>
              <li>Privacy</li>
            </a>
            <a href='#'>
              <li>Terms & Conditions</li>
            </a>
          </ul>
        </Box>
      </Container>
    </footer>
  );
};
export default Footer;
