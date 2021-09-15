import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';

interface workshopProps {
  title: string;
  tag: string;
  date: string;
  about: string;
  description: string;
}

const Workshops: React.FC<workshopProps> = ({
  title,
  tag,
  date,
  about,
  description,
}) => {
  return (
    <div className='workshop-div'>
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
                  {tag}
                </a>
                <a href='/#' className='date'>
                  {date}
                </a>
              </div>
            </Hidden>
            <h3>{title}</h3>
            <Hidden smUp>
              <div className='date-mob'>
                <a href='/#' className='date'>
                  {date}
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
            <p>{about}</p>
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
              material on telegram on Mobile number you have registered with.
            </li>
            <li>
              <span>Languages:</span> Our mentors will explain in both hindi as
              well as english languages.
            </li>
            <li>
              <span>Master Class:</span> Learn from Expert.
            </li>
            <li>
              <span>Perks and Prizes:</span> Certificates to all candidates and
              goodies for good performers in workshop.
            </li>
            <li>
              <span>Mentor:</span> Mr. Prateek Narang
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hidden smDown>
            <div className='desc-content-desk'>
              <h2>Why {title} ?</h2>
              <p>{description}</p>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};
export default Workshops;
