'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import { useState } from 'react';
import { MdExpand } from 'react-icons/md';

interface SelectedOptions {
  [questionNumber: string]: {
    [option: string]: boolean;
  };
}

interface QuestionData {
  [key: string]: {
    title: string;
    questions: {
      question_number: any;
      question_description: string;
      options: {
        [key: string]: string;
      };
      actions: string[];
    }[];
  };
}

interface ResponseData {
  case_id: string;
  status: string;
  procedure_name: string;
  cpt_codes: string[];
  summary: string;
  is_met: boolean;
  is_complete: boolean;
  steps: {
    key: string;
    question: string;
    options: {
      key: string;
      text: string;
      selected: boolean;
    }[];
    options_string: string;
    logic: {
      text: string;
      selected: boolean;
    }[];
    logic_string: string;
    reasoning: string;
    decision: string;
    next_step: string;
    is_met: boolean;
    is_final: boolean;
    evidence: {
      content: string;
      page_number: number;
      pdf_id: string;
      pdf_name: string;
      event_datetime: string;
    }[];
  }[];
}

export function Analysis({
  questionData,
  responseData,
}: {
  questionData: QuestionData;
  responseData: ResponseData;
}) {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  // Function to get the answer string from the selected options
  const getAnswerString = (options) =>
    options
      .filter((o) => o.selected)
      .map((o) => o.key)
      .join(', ');

  const handleAccordionToggle =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded({ ...expanded, [panel]: isExpanded });
    };

  return (
    <>
      <Box className="space-y-8 p-4">
        {responseData.steps.map((step, index) => {
          // Extract the answer string from the selected options
          const answerString = getAnswerString(step.options);

          // Determine if the accordion for this step should be expanded
          const isExpanded = expanded[`panel${step.key}`];

          return (
            <Card key={step.key} className="mb-4 shadow-lg">
              <CardContent className="space-y-4">
                <Typography
                  variant="subtitle1"
                  className="text-lg font-semibold text-gray-700"
                >
                  Q{step.key}: {parse(step.question)}
                </Typography>

                <Typography variant="body1">Answer: {answerString}</Typography>

                {step.actions && step.actions.length > 0 && (
                  <Accordion
                    expanded={isExpanded}
                    onChange={handleAccordionToggle(`panel${step.key}`)}
                  >
                    <AccordionSummary
                      expandIcon={<MdExpand />}
                      aria-controls={`action-content${step.key}`}
                      id={`action-header${step.key}`}
                      className="bg-gray-100 hover:bg-gray-200"
                    >
                      <Typography className="font-semibold">Actions</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="flex flex-col">
                      {step.actions.map((action, actionIdx) => (
                        <Typography
                          key={actionIdx}
                          variant="body2"
                          className="flex items-center"
                        >
                          <span className="mr-2 text-gray-500">•</span>{' '}
                          {parse(action)}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          );
        })}

        {responseData.is_complete && (
          <Typography
            variant="body1"
            className="text-xl font-bold text-red-800"
          >
            Outcome: {responseData.summary}
          </Typography>
        )}
      </Box>
    </>
  );
}
