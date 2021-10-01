import { Container, Avatar, Box, Grid } from '@material-ui/core';
import React from 'react';

const Mentor = () => {
  return (
    <Container maxWidth='lg' className='mentor-section'>
      <Box className='title'>
        <h2>
          <span>Know Your Mentor</span>
        </h2>
      </Box>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={8}>
          <Box className='mentor-box'>
            <Box className='mentor-img'>
              <Avatar
                src='images/mentor-img.jpeg'
                alt='mentor-img'
                style={{ height: '140px', width: '140px' }}
              />
            </Box>
            <Box className='mentor-heading'>
              <h2>Yadnesh Mohan Zagade</h2>
              <h4>C.E.O. & Founder – Tech Cryptors</h4>
            </Box>
            <Box className='mentor-details'>
              <p>
                We are elated to introduce Mr. Yadnesh Mohan Zagade, C.E.O. and
                Founder of Tech Cryptors as the mentor for Flair Haven this
                year. He has been a research and development enthusiast since
                2014 and has marvellously worked on different technologies and
                trending software like Android Studio, PyCharm, MATLAB, Proteus
                to name a few. His victories in developing various high-end
                products are awe-inspiring. Conducting a vast number of
                workshops, seminars, internship courses etc. and training
                thousands of students from highly revered engineering colleges
                like IITs & NITs, Mr. Yadnesh has been greatly influential all
                across India and deservingly is a member of Departmental
                Advisory Boards (DAB) of many renowned colleges. His mastery and
                passion for coding are, for sure, motivation and a source of
                knowledge to everyone. Our mentor and we are more than excited
                to meet the keen set of mentees and we look forward to a
                fruitful and knowledgeable time.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mentor;
