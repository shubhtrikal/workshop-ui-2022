import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, Container } from '@material-ui/core';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
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
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '2px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    padding: '10px',
  },
})(MuiAccordionDetails);

interface FaqProps {
  index: number;
  expanded: string | boolean;
  question: string;
  answer: string;
  handleChange: any;
}

const AccordionItem: React.FC<FaqProps> = ({
  index,
  expanded,
  question,
  answer,
  handleChange,
}) => {
  const panel: string = 'panel' + index.toString();
  return (
    <Container maxWidth='md'>
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          aria-controls={`${panel}` + `d-content`}
          id={`${panel}` + `d-header`}
          expandIcon={<ExpandMoreIcon />}
        >
          <Box className={'questions'}>
            <h3>{question}</h3>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answers'>{answer}</p>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default AccordionItem;
