import { Container, Grid, Hidden, Typography } from '@material-ui/core';
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
                      October 17-18, 2021
                    </a>
                  </div>
                </Hidden>
                <h3>Android Development with Kotlin</h3>
                <Hidden smUp>
                  <div className='date-mob'>
                    <a href='/#' className='date'>
                      October 17-18, 2021
                    </a>
                  </div>
                </Hidden>
                <a href='/#' className='btn btn-two btn-hover'>
                  Book Seat
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='workshop-about'>
                <h2>About Workshop</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum placeat corrupti veritatis libero, odio minus quidem
                  tempore beatae labore porro ratione corporis sequi aperiam.
                  Aliquam officiis beatae repellat maiores nisi nemo fugiat, ab
                  cumque dolorum laudantium eius hic culpa unde eum veniam. Ipsa
                  modi totam doloribus pariatur quisquam commodi quos temporibus
                  nesciunt saepe porro nam corrupti nisi qui iste voluptates
                  repudiandae dignissimos architecto molestiae assumenda ab
                  incidunt, optio molestias? Recusandae ut eligendi laborum
                  ipsam. Aliquid beatae officia tempora deleniti perferendis
                  obcaecati? Molestiae recusandae incidunt quas nobis magnam
                  nemo pariatur necessitatibus soluta obcaecati, suscipit
                  accusantium similique ab debitis. Ratione, natus suscipit.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            className='desc-content'
          >
            <Grid item xs={12} md={6}>
              <ul className='list-unstyled'>
                <li>
                  <span>Digital Event:</span> Watch it online!
                </li>
                <li>
                  <span>Prerequisite: </span> We will send you all prerequisite
                  material on telegram on Mobile number you have registered
                  with.
                </li>
                <li>
                  <span>Languages:</span> Our mentors will explain in both hindi
                  as well as english languages.
                </li>
                <li>
                  <span>Master Class:</span> Learn from Expert.
                </li>
                <li>
                  <span>Perks and Prizes:</span> Certificates to all candidates
                  and goodies for good performers in workshop.
                </li>
                <li>
                  <span>Mentor:</span> Mr. Prateek Narang
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Hidden smDown>
                <div className='desc-content-desk'>
                  <h2>Why Android Development ?</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta labore quaerat veniam molestiae autem dolor rem,
                    nesciunt recusandae impedit aut, non veritatis unde ea
                    sapiente quia modi dignissimos. At id quisquam ea ducimus
                    exercitationem modi aliquam, molestiae possimus facilis cum
                    veritatis, dicta quidem sapiente maxime aut omnis voluptate
                    totam magnam cumque eum atque. Inventore quo autem optio
                    rerum, doloribus commodi cupiditate, obcaecati possimus
                    asperiores repellendus numquam necessitatibus perspiciatis.
                    Impedit necessitatibus voluptate iusto tempora, nam quis
                    harum soluta facere quasi recusandae, at sequi ratione omnis
                    reiciendis totam facilis blanditiis? Ea voluptates laborum
                    in? Ullam corporis dicta ratione corrupti accusantium
                    aliquam atque.
                  </p>
                </div>
              </Hidden>
            </Grid>
          </Grid>
          {/* <div className='workshop-desc'>
            <div className='desc-content'></div>
          </div> */}
        </div>
      </section>
    </Container>
  );
};
export default Workshops;
