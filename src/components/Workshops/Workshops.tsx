import { Container, Grid, Hidden } from '@material-ui/core';
import React from 'react';

const Workshops: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <section className='workshop-section'>
        <div className='workshop-title'>
          <h2>
            <span>Workshops</span>ISTE SC MANIT
          </h2>
        </div>
        <div>
          <div className='workshop-img'>
            <img src='images/workshop.png' alt='image' />
          </div>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            className='workshop-content'
          >
            <Grid item xs={12} md={6} className='workshop-info'>
              <div className='workshop-card'>
                <Hidden smDown>
                  <div>
                    <a href='/#' className='tag'>
                      Workshop
                    </a>
                    <a href='/#' className='date'>
                      18 - 10 - 2021
                    </a>
                  </div>
                </Hidden>
                <h3>Android Development with Kotlin</h3>
                <Hidden smUp>
                  <div className='date-mob'>
                    <a href='/#' className='date'>
                      18 - 10 - 2021
                    </a>
                  </div>
                </Hidden>
                <a href='/#' className='btn btn-two btn-hover'>
                  Book Seat
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum placeat corrupti veritatis libero, odio minus quidem
                tempore beatae labore porro ratione corporis sequi aperiam.
                Aliquam officiis beatae repellat maiores nisi nemo fugiat, ab
                cumque dolorum laudantium eius hic culpa unde eum veniam. Ipsa
                modi totam doloribus pariatur quisquam commodi quos temporibus
                nesciunt saepe porro nam corrupti nisi qui iste voluptates
                repudiandae dignissimos architecto molestiae assumenda ab
                incidunt, optio molestias? Recusandae ut eligendi laborum ipsam.
                Aliquid beatae officia tempora deleniti perferendis obcaecati?
                Molestiae recusandae incidunt quas nobis magnam nemo pariatur
                necessitatibus soluta obcaecati, suscipit accusantium similique
                ab debitis. Ratione, natus suscipit.
              </p>
            </Grid>
          </Grid>
        </div>
      </section>
    </Container>
  );
};
export default Workshops;
