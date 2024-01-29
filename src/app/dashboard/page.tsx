'use client';
import { JobStatusTable } from '@/app/ui/dashboard/job-process';
import { PdfUpload } from '@/app/ui/dashboard/pdf-upload';
import { useState } from 'react';

type Job = {
  id: number;
  status: string;
  case_id: string;
  cpt_codes: string[];
  is_met: boolean | null;
  summary: string;
  uploadedAt: string;
};

export default function Page() {
  const [jobStatus, setJobStatus] = useState<Job[]>([]);
  // Here I am initiating an API call to run the analysis. 
  const handleRunAnalysis = async () => {
    const newJob: Job = {
      id: jobStatus.length + 1,
      status: 'Processing',
      case_id: '',
      cpt_codes: [],
      is_met: null,
      summary: '',
      uploadedAt: new Date().toISOString(),
    };

    setJobStatus([...jobStatus, newJob]);

    try {
      const response = await fetch('/api/response');
      const responseData = await response.json();
      // I am using a setTimeout to simulate the processing time.
      setTimeout(() => {
        setJobStatus((currentStatus) =>
          currentStatus.map((job) =>
            job.id === job.id
              ? {
                ...job,
                status: 'Done',
                case_id: responseData.data.case_id,
                cpt_codes: responseData.data.cpt_codes,
                is_met: responseData.data.is_met,
                summary: responseData.data.summary,
              }
              : job,
          ),
        );
      }, 3000);
    } catch (error) {
      console.error('Error running analysis:', error);
    }
  };

  return (
    <>
      <PdfUpload onRunAnalysis={handleRunAnalysis} />
      {jobStatus.length > 0 && <JobStatusTable jobs={jobStatus} />}
    </>
  );
}
