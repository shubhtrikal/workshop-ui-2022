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
      <Box>
        <Grid container spacing={4} justifyContent='center' alignItems='center'>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/certificate.png' alt='img' width='100px' />
              <h4>E-Certificates</h4>
              <p>
                E-Certificates by ISTE SC MANIT will be provided to all the
                registered participants which will be an engaging add-on for
                their CVs along with a hands-on Project from scratch.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/internship.jpg' alt='img' width='100px' />
              <h4>Internship Opportunity</h4>
              <p>
                A chance for you to put your knowledge of codes into practice
                through Intriguing Internship Programs for the top-performing
                teams of Version Beta 4.0 from renowned organizations.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <div className='prizes-card'>
              <img src='images/coupon.png' alt='img' width='120px' />
              <h4>Discount Coupons</h4>
              <p>
                15% discount coupons on Coding Ninja's Courses.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Prizes;
