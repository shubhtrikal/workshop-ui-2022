import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

const Prizes = () => {
  return (
    <Container maxWidth='lg'>
      <Box className='title'>
        <h2>
          <span>Prizes & Benefits</span>
        </h2>
      </Box>
      <Box className='seo_service_area sec_pad'>
        <Grid container spacing={6} justifyContent='center' alignItems='center'>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/certificate.png' alt='img' width='120px' />
              <h4>Certificates by ISTE SC MANIT</h4>
              <p>
                E-Certificates will be provided to all the registered
                participants which will be an engaging add-on for their CVs
                along with a hands-on Project from scratch.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/internship.jpg' alt='img' width='100px' />
              <h4>Internship Opportunity</h4>
              <p>Internship Programs for the winners of Version Beta 4.0.</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/coupon.png' alt='img' width='120px' />
              <h4>Discount Coupons on Tech Cryptors Courses </h4>
              <p>
                10% discount coupons on all the two-month certified courses of
                Tech Cryptors for all the participants of Version Beta 4.0
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Prizes;
