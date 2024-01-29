import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import moment from 'moment';
import { MdExpand } from 'react-icons/md';

const EvidenceAccordion = ({ evidence }) => {
  return (
    <Accordion className="shadow-lg">
      <AccordionSummary expandIcon={<MdExpand />} className="hover:bg-gray-200">
        <Typography>
          <span className="font-semibold text-blue-500 underline">
            Evidence
          </span>
        </Typography>
        {evidence && evidence.length > 0 && (
          <>
            {evidence[0].pdf_id && (
              <span className="ml-4 font-semibold">
                PDF: <span className="font-normal">{evidence[0].pdf_id}</span>
              </span>
            )}
            {evidence[0].pdf_name && (
              <span className="ml-4 font-semibold">
                Name:{' '}
                <span className="font-normal">{evidence[0].pdf_name}</span>
              </span>
            )}
            {evidence[0].event_datetime && (
              <span className="ml-4 font-semibold">
                Date:{' '}
                <span className="font-normal">
                  {moment(evidence[0].event_datetime).format('LLL')}
                </span>
              </span>
            )}
          </>
        )}
      </AccordionSummary>
      <AccordionDetails className="bg-white">
        <TableContainer component={Paper} className="my-4">
          <Table
            className="min-w-full divide-y divide-gray-200"
            aria-label="evidence table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Page</TableCell>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {evidence.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="divide-y divide-gray-200 bg-white"
                >
                  <TableCell align="right">{item.page_number}</TableCell>
                  <TableCell component="th" scope="row">
                    {parse(String(item.content))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default EvidenceAccordion;
