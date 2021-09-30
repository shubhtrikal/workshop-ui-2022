import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import AccordionItem from './AccordionItem';

const useStyles = makeStyles({
  root: {
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
});

const FaqComponent: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const classes = useStyles();

  const questionsAnswers = [
    {
      question: `What is Version Beta exactly?`,
      answer: `Version Beta is Central India's largest Hackathon held annually with mass participation from all over the nation. Illuminative technical workshops are conducted before the 36-hour coding ride.`,
    },
    {
      question: `What is Flair Haven?`,
      answer: `Flair Haven is a series of workshops organized by ISTE SC MANIT as a part of its annual technical conclave Version Beta. It's an opportunity to learn technical skills from inspiring mentors having years of expertise.`,
    },
    {
      question: `What are the domains for the workshops?`,
      answer: `  Android App Development using Android Studio and Machine Learning. `,
    },
    {
      question: `Duration of the workshop?`,
      answer: `The time duration per workshop is 6 to 8 hours over two days.`,
    },
    {
      question: `Dates for the workshop?`,
      answer: `Workshop on Android App Development using Android Studio is on the 16th and 17th of October’ 2021. The Machine Learning workshop is on the 19th and 20th of October’ 2021.`,
    },
    {
      question: `Are there any prerequisites for the workshop?`,
      answer: `The prerequisites, if any, will be provided before the workshop.`,
    },
    {
      question: `What will be the platform for the workshops?`,
      answer: `The workshop will take place on Zoom.`,
    },
    {
      question: `What are the exciting points about the workshop?`,
      answer: `The workshops will conclude with a suitable CV-ready project for students.          
              Solving real-time doubts and queries of the participants.
              10% discount on all the two-month courses and internship programs from Tech Cryptors Pvt. Ltd. for all the participants of Version Beta 4.0.`,
    },
    {
      question: `Who can participate?`,
      answer: `Regardless of the experience, anyone can attend the workshop. It would be a golden opportunity to learn new skills and gain exposure in the Tech world.`,
    },
    {
      question: `How to register for Flair Haven? `,
      answer: `You can head over to Register Now and grab your seat`,
    },
  ];

  const renderQuestionsAnswer = questionsAnswers.map((item, index) => {
    const question = item.question;
    const answer = item.answer;
    return (
      <AccordionItem
        key={index}
        index={index}
        expanded={expanded}
        question={question}
        answer={answer}
        handleChange={handleChange}
      />
    );
  });

  return (
    <Container maxWidth='lg'>
      <section className={classes.root}>
        <Box className='title'>
          <h2>
            <span>FAQ's</span>
          </h2>
        </Box>
        <Box className={'faq-section'}>{renderQuestionsAnswer}</Box>
      </section>
    </Container>
  );
};
export default FaqComponent;
