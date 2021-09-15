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
      answer: `Version Beta is a technical conclave comprising of the following events : 
                A series of technical workshops , 
                Cognition- A series of seminars ,
                Central India’s Largest Students’ held Hackathon`,
    },
    {
      question: `Which workshops in Version Beta will be conducted for coding enthusiasts ?`,
      answer: `Under Version Beta, workshops on Data Science and Data Structures & Algorithms will be conducted. The workshops will be mentored by Prateek Narang from Coding Blocks.`,
    },
    {
      question: `What would be the implications of the projects we would be building?`,
      answer: `So the live projects you would build can be used as minor or even major projects in your college. You can mention them in your CV to enhance it which may help you in landing an internship or a job!`,
    },
    {
      question: `Do I need to have any previous knowledge to register for these workshops?`,
      answer: `No. You just need to have a passion for learning. Every other prerequisite material will be provided to you 15 days before the workshops through telegram groups. You just have to go through them and you're good to go.`,
    },
    {
      question: `If I attend the workshops and perform well, would there be any bonus prize for me?`,
      answer: `Yes. Your efforts will not go unnoticed. There would be goodies like T-shirts, bags, stickers and other exciting prizes for the best performing students in the workshops. Moreover, if you perform exceptionally good, you also stand a chance to get a free copy of " Mastering competitive programming " by Coding Blocks!`,
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
