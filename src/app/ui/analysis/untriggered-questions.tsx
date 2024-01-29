import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import { useState } from 'react';
import { MdExpand } from 'react-icons/md';


interface Question {
  question_number: number;
  question_description: string;
  options: object;
  actions: string[];
}

// The component that collects the questions of which the decision tree has not yet reached
const UntriggeredQuestionsAccordion = ({ questions }: { questions: Array<Question> }) => {
  const [showRemainingQuestions, setShowRemainingQuestions] = useState(false);

  const indexToLetter = (idx: number) => String.fromCharCode('A'.charCodeAt(0) + idx);

  return (
    <Accordion
      expanded={showRemainingQuestions}
      onChange={(_event, isExpanded) => setShowRemainingQuestions(isExpanded)}
    >
      <AccordionSummary expandIcon={<MdExpand />} className="hover:bg-red-200">
        <Typography>Untriggered Questions</Typography>
      </AccordionSummary>
      <AccordionDetails className="flex flex-col">
        {questions.map((question, index) => (
          <Card key={index} className="mb-10 shadow-lg">
            <CardContent className="space-y-4">
              <Typography variant="subtitle1" gutterBottom>
                {question.question_number}.{' '}
                {parse(question.question_description)}
              </Typography>
              <List className="list-inside list-disc">
                {Object.entries(question.options).map(([key, value], idx) => (
                  <ListItem key={key} className="pl-0">
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          disabled={true}
                          className="p-2"
                        />
                      }
                      label={
                        <Typography variant="body2" component="span">
                          {`${indexToLetter(idx)}.`}
                          {parse(String(value))}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <ul className="list-disc pl-6">
                {question.actions.map((action, idx) => (
                  <li key={idx} className="mt-1">
                    {parse(action)}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default UntriggeredQuestionsAccordion;
