import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

const Prizes = () => {
  return (
    <Container maxWidth='lg'>
      <section className=''>
        <Box className='title'>
          <h2>
            <span>Prizes & Benefits</span>
          </h2>
        </Box>
        <Box className='seo_service_area sec_pad'>
          <Grid
            container
            spacing={6}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={12} sm={8} md={4}>
              <div className='prizes-card'>
                <img src='images/iste.svg' alt='img' />
                <h4>Certificates by Coding Blocks</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  mollitia atque eaque voluptatem minus modi a dolore fugit ex
                  inventore.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <div className='prizes-card'>
                <img src='images/iste.svg' alt='img' />
                <h4>55% off Coding Blocks Coupons</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  mollitia atque eaque voluptatem minus modi a dolore fugit ex
                  inventore.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={8} md={4}>
              <div className='prizes-card'>
                <img src='images/iste.svg' alt='img' />
                <h4>Coding Blocks goodies and merchandise</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  mollitia atque eaque voluptatem minus modi a dolore fugit ex
                  inventore.
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </section>
    </Container>
  );
};

export default Prizes;
