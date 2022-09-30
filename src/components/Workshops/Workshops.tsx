import { Container, Grid, Hidden, Typography } from '@material-ui/core';
import React from 'react';
import Points from './points';
interface workshopProps {
  title: string;
  image: string;
  tag: string;
  date: string;
  about: string;
  description: string;
  points: string[];
}

const Workshops: React.FC<workshopProps> = ({
  title,
  image,
  tag,
  date,
  about,
  description,
  points,
}) => {
  return (
    <div className='workshop-div'>
      <div className='workshop-img'>
        <img src={image} alt={title} min-height = '350px' width='100%'/>
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
            {/* <a href='/register' className='btn btn-two btn-hover'>
              Book Seat
            </a> */}
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
            {/* <li>
              <span>Digital Event:</span> Watch it online!
            </li> */}
            <li>
              <span>Prerequisite: </span> Remember that the sole prerequisite
              for attending the Workshop is "enthu"! Apart from that, the mentor
              will instruct from the roots up.
            </li>
            <li>
              <span>Languages:</span> Our mentors will explain in both hindi as
              well as english languages.
            </li>
            <li>
              <span>Perks and Benefits:</span> Certificates to all candidates
              and goodies for good performers in workshop.
            </li>
            <li>
              <span>Mentor:</span> Mr. Shantanu Shubham
            </li>
            <li>
              <span>Price:</span> ₹ 500
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hidden smDown>
            <div className='desc-content-desk'>
              <h2>Why {title} ?</h2>
              <p>{description}</p>
            </div>

            <div className='desc-content-desk'>
              <Points points={points} />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};
export default Workshops;
