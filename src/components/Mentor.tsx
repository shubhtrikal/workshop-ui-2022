import { Container, Avatar, Box, Grid } from "@material-ui/core";
import React from "react";

const Mentor = () => {
  return (
    <Container maxWidth="lg" className="mentor-section">
      <Box className="title">
        <h2>
          <span>Know Your Mentor</span>
        </h2>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8}>
          <Box className="mentor-box">
            <Box className="mentor-img">
              <Avatar
                src="images/mentor.jpeg"
                alt="mentor-img"
                style={{ height: "140px", width: "140px" }}
              />
            </Box>
            <Box className="mentor-heading">
              <h2>Shantanu Shubham</h2>
              <h4>Leading Instructor at Coding Ninjas</h4>
            </Box>
            <Box className="mentor-details">
              <p>
                With great contentment, we welcome Mr. Shantanu Shubham onboard
                with us as the mentor of Flair Haven’22.He is currently one of
                the top most instructors at Coding Ninjas and a software
                engineer at Schlumberger. Having mentored over 2500 students, he
                not only has all of us in awe of his excellent representational
                and communication skills but has also proven his expertise in
                various other domains like Web Development and technologies like
                Spring Boot, Dropwizard, Django, React, Angular, React Native
                and many more. His dynamic personality, grit for coding and mind
                set are a constant motivation and inspiration for us all. Our
                mentor together with the ISTE family is looking forward to
                meeting the technocrat in you soon!!
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Mentor;
