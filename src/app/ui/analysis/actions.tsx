import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import { MdExpand } from 'react-icons/md';

const ActionsAccordion = ({ actions }) => {
  return (
    <Accordion className="shadow-lg">
      <AccordionSummary
        expandIcon={<MdExpand />}
        className="bg-gray-100 hover:bg-gray-200"
      >
        <Typography>
          <span className="font-semibold text-blue-500 underline">Actions</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="flex flex-col">
        <ul className="list-disc pl-6">
          {actions.map((action, idx) => (
            <li
              key={idx}
              className={`mt-1 ${action.selected ? 'bg-yellow-200' : ''}`}
            >
              {parse(action.text)}
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default ActionsAccordion;
