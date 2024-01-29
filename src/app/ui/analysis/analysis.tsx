'use client';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import ActionsAccordion from './actions';
import EvidenceAccordion from './evidence';
import ReasoningAccordion from './resoning-accordion';
import UntriggeredQuestionsAccordion from './untriggered-questions';

const getStepsFromResponse = (responseData) => {
  return responseData.steps.map((step) => {
    const selectedOptions = step.options
      .filter((option) => option.selected)
      .map((option) => option.key);
    return {
      ...step,
      selectedOptions,
    };
  });
};

const enhanceResponseData = (responseData, questionData) => {
  const questionDataKey = responseData[0]?.selectedOptions[0];
  return responseData.map((step) => {
    const stepQuestionData = questionData[questionDataKey];
    if (stepQuestionData) {
      const questionNumber = parseInt(step.key);
      const question = stepQuestionData.questions.find(
        (question) => question.question_number === questionNumber,
      );
      return {
        ...step,
        questionData: question ? question : null,
      };
    } else {
      return { ...step, questionData: null };
    }
  });
};

export function Analysis({ responseData, questionData }) {
  const enhancedSteps = enhanceResponseData(
    getStepsFromResponse(responseData),
    questionData,
  );
  const questionDataKey =
    enhancedSteps.length > 0 ? enhancedSteps[0].selectedOptions[0] : null;
  const lastQuestionNumber = Math.max(
    ...enhancedSteps.map((step) => parseInt(step.key)),
    0,
  );
  const remainingQuestions = questionDataKey
    ? questionData[questionDataKey].questions.filter(
        (question) => question.question_number > lastQuestionNumber,
      )
    : [];

  const indexToLetter = (idx) => String.fromCharCode('A'.charCodeAt(0) + idx);

  return (
    <Box className="space-y-8 px-4 py-8">
      <Box className="border-b border-green-200 bg-green-100 px-4 py-2">
        <div className="flex items-center justify-between">
          <Typography variant="h6" className="text-green-800">
            Case ID: {responseData.case_id}
          </Typography>
          <Typography variant="h6" className="text-green-800">
            Procedure: {responseData.procedure_name}
          </Typography>
          <Box
            className={`inline-flex items-center justify-center rounded-full px-3 py-1 font-bold ${responseData.is_met ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            <Typography variant="subtitle1">
              Status: {responseData.is_met ? 'Met' : 'Not Met'}
            </Typography>
          </Box>
        </div>
      </Box>

      {enhancedSteps.map((step, index) => (
        <Card key={index} className="mb-10 shadow-lg">
          <CardContent className="space-y-4">
            {step.key === '0' && (
              <>
                <Typography variant="h5">
                  INSTRUCTIONS: {step.question}
                </Typography>
                <List className="list-inside list-disc">
                  {step.options.map((option, idx) => {
                    const labelContent = (
                      <>
                        <Typography variant="body2" component="span">
                          {option.key}.{' '}
                        </Typography>
                        <Typography variant="body2" component="span">
                          {option.text}
                        </Typography>
                      </>
                    );
                    return (
                      <ListItem key={option.key} className="pl-0">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={option.selected}
                              color="primary"
                              disabled={!option.selected}
                              className="p-2"
                            />
                          }
                          label={labelContent}
                        />
                      </ListItem>
                    );
                  })}
                </List>
                {step.reasoning && (
                  <ReasoningAccordion reasoning={step.reasoning} />
                )}
                {step.evidence && step.evidence.length > 0 && (
                  <EvidenceAccordion evidence={step.evidence} />
                )}
              </>
            )}

            {step.questionData && (
              <>
                <Typography variant="h6">
                  {step.key}. {parse(step.questionData.question_description)}
                </Typography>

                <List className="list-inside list-disc">
                  {Object.entries(step.questionData.options).map(
                    ([key, value], idx) => {
                      const isSelected = step.selectedOptions.includes(key);
                      const labelContent = (
                        <>
                          <Typography
                            variant="body2"
                            component="span"
                          >{`${indexToLetter(idx)}. `}</Typography>
                          <Typography variant="body2" component="span">
                            {parse(String(value))}
                          </Typography>
                        </>
                      );
                      return (
                        <ListItem key={key} className="pl-0">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={isSelected}
                                color="primary"
                                disabled={!isSelected}
                                className="p-2"
                              />
                            }
                            label={labelContent}
                          />
                        </ListItem>
                      );
                    },
                  )}
                </List>

                {step.questionData && <ActionsAccordion actions={step.logic} />}

                {step.reasoning && (
                  <ReasoningAccordion reasoning={step.reasoning} />
                )}

                {step.evidence && step.evidence.length > 0 && (
                  <EvidenceAccordion evidence={step.evidence} />
                )}
              </>
            )}
          </CardContent>
        </Card>
      ))}
      <UntriggeredQuestionsAccordion questions={remainingQuestions} />
    </Box>
  );
}
