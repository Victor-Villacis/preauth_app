import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import { MdExpand } from 'react-icons/md';

const makeNumbersBold = (text: string) => {
  return text.replace(
    /(\d+\.) (?=[A-Z])/g,
    (match) => `<strong>${match}</strong>`,
  );
};

// The component that shows the resasoning of the decision
const ReasoningAccordion = ({ reasoning }: { reasoning: string }) => {
  const transformedReasoning = makeNumbersBold(reasoning);

  return (
    <Accordion className="shadow-lg">
      <AccordionSummary expandIcon={<MdExpand />} className="hover:bg-gray-200">
        <Typography>
          <span className="font-semibold text-blue-500 underline">
            Reasoning
          </span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-white p-4">
        <Typography variant="body1">{parse(transformedReasoning)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ReasoningAccordion;
