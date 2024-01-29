import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import { useRouter } from 'next/navigation';

import moment from 'moment';
import { useState } from 'react';
import { IoExpandOutline } from 'react-icons/io5';
import { MdAccessTimeFilled, MdReadMore } from 'react-icons/md';

export function JobStatusTable({ jobs }: any) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const router = useRouter();

  const handleOpenModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDetailsClick = (event: any, job: any) => {
    event.stopPropagation();
    router.push(`/dashboard/analysis/`);
  };

  return (
    <>
      <TableContainer component={Paper} className="mt-8">
        <Table aria-label="job status table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Case #</TableCell>
              <TableCell>CPT Codes</TableCell>
              <TableCell>Determination</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Uploaded</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job: any) => (
              <TableRow key={job.id}>
                <TableCell component="th" scope="row">
                  {' '}
                  {job.id}{' '}
                </TableCell>
                <TableCell>
                  {job.status === 'Processing' ? (
                    <span className="ml-2 rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-green-800">
                      Processing...
                      <CircularProgress
                        size={10}
                        className="ml-2 text-green-500"
                      />
                    </span>
                  ) : (
                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-800">
                      {job.status}
                    </span>
                  )}
                </TableCell>
                <TableCell>{job.case_id}</TableCell>
                <TableCell>
                  <Tooltip title={'View CPT Codes'}>
                    <IconButton
                      disabled={job.status === 'Processing'}
                      onClick={() =>
                        handleOpenModal('CPT Codes', job.cpt_codes.join(', '))
                      }
                    >
                      <IoExpandOutline />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {job.is_met === null ? (
                    <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-800">
                      Pending
                    </span>
                  ) : job.is_met === true ? (
                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-800">
                      Met
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-800">
                      Not Met
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <Tooltip title={'View Summary'}>
                    <IconButton
                      disabled={job.status === 'Processing'}
                      onClick={() => handleOpenModal('Summary', job.summary)}
                    >
                      <IoExpandOutline />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip
                    title={moment(job.uploadedAt).format('LLLL')}
                    placement="bottom"
                    arrow
                  >
                    <div className="flex items-center space-x-1">
                      <MdAccessTimeFilled className="text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {moment(job.uploadedAt).fromNow()}
                      </span>
                    </div>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="View Details">
                    <IconButton onClick={(e) => handleDetailsClick(e, job)}>
                      <MdReadMore />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
      >
        <DialogTitle id="modal-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <p>{modalContent}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
