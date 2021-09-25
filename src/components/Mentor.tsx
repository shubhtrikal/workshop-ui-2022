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
                src='images/iste.svg'
                alt='mentor-img'
                style={{ height: '140px', width: '140px' }}
              />
            </Box>
            <Box className='mentor-heading'>
              <h2>Prateek Narang</h2>
              <h4>Founder & CEO Coding Blocks Ltd.</h4>
            </Box>
            <Box className='mentor-details'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                neque rem quas quod quisquam tempora hic amet expedita
                voluptatum similique eum quis aliquam sequi, distinctio ea harum
                fugiat atque cumque. Fugiat explicabo veniam id aperiam magni
                nihil saepe cupiditate doloremque ullam quos natus quasi sit
                vitae ex, enim quae laboriosam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam voluptas, laborum nihil
                esse nobis voluptatum, rerum consequatur asperiores, excepturi
                reiciendis iusto maxime libero velit atque minus quis autem
                repudiandae. Sequi, quia. Illo rerum recusandae facere dolores
                aut, quo asperiores incidunt fuga numquam exercitationem optio
                tempora eveniet voluptatem! Omnis reiciendis laboriosam facilis,
                doloribus dicta cumque sequi impedit provident laudantium.
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mentor;
