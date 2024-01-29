import { Box } from '@material-ui/core';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFilePdf } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';
export function PdfUpload({ onRunAnalysis }: any) {
  const [guidelinesPdf, setGuidelinesPdf] = useState<File | null>(null);
  const [recordFile, setRecordFile] = useState<File | null>(null);
  const [uploadStep, setUploadStep] = useState(1);

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const file = acceptedFiles[0];

      if (uploadStep === 1 && file.type === 'application/pdf') {
        setGuidelinesPdf(file);
        setUploadStep(2);
      } else if (uploadStep === 2) {
        setRecordFile(file);
      }
    },
    [uploadStep],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept:
      uploadStep === 1 ? { 'application/pdf': [] } : { 'application/pdf': [] },
    maxFiles: 2,
    maxSize: 100 * 1024 * 1024,
  });

  const handleCancelAnalysis = () => {
    setGuidelinesPdf(null);
    setRecordFile(null);
    setUploadStep(1);
  };

  const handleCancelGuidelines = () => {
    setGuidelinesPdf(null);
    setUploadStep(1);
  };

  const handleCancelRecord = () => {
    setRecordFile(null);
    setUploadStep(2);
  };

  const handleRunAnalysis = () => {
    onRunAnalysis();
    setGuidelinesPdf(null);
    setRecordFile(null);
    setUploadStep(1);
  };

  return (
    <div>
      <div className="mb-4 text-left">
        <h2 className="text-lg font-semibold text-green-600">
          Preauthorization Upload Analysis Process
        </h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center font-sans">
        <Box
          {...getRootProps()}
          className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-green-300 bg-white hover:bg-green-100"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-500">Drop the files here...</p>
          ) : (
            <div className="text-center">
              <p className="mb-2 text-sm text-gray-500">
                <span
                  className={clsx('font-semibold', {
                    'text-green-400': uploadStep === 1,
                  })}
                >
                  {uploadStep === 1 ? (
                    <span>
                      Step 1: Upload{' '}
                      <span className="text-green-400">Guidelines</span> PDF
                    </span>
                  ) : (
                    <span>
                      Step 2: Upload{' '}
                      <span className="text-green-400">
                        Patient Medical Record
                      </span>{' '}
                      PDF
                    </span>
                  )}
                </span>
              </p>
              <div className="text-center">
                <p className="mb-2 inline-flex items-center text-sm text-gray-500">
                  Drag or click to upload PDF up to 100MB{' '}
                  <BsFilePdf className="ml-1 text-sm text-red-500" />
                </p>
              </div>
            </div>
          )}
        </Box>

        {guidelinesPdf && (
          <div className="mt-3 flex items-center text-sm font-medium text-green-700">
            Guidelines PDF:{' '}
            <span className="text-green-800">{guidelinesPdf.name}</span> (size:{' '}
            {(guidelinesPdf.size / 1024 / 1024).toFixed(2)} MB)
            <button
              onClick={handleCancelGuidelines}
              className="ml-1"
              aria-label="Reupload guidelines"
            >
              <TiDelete className="cursor-pointer text-red-500 hover:text-red-600" />
            </button>
          </div>
        )}

        {recordFile && (
          <div className="mt-3 text-sm font-medium text-green-700">
            Record File:{' '}
            <span className="text-green-800">{recordFile.name}</span> (size:{' '}
            {(recordFile.size / 1024 / 1024).toFixed(2)} MB)
            <button
              onClick={handleCancelRecord}
              className="ml-1"
              aria-label="Reupload guidelines"
            >
              <TiDelete className="cursor-pointer text-red-500 hover:text-red-600" />
            </button>
          </div>
        )}

        {guidelinesPdf && recordFile && (
          <div className="mt-3 flex items-center justify-center space-x-2">
            {recordFile && (
              <button
                onClick={handleRunAnalysis}
                className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                Run Analysis
              </button>
            )}
            <button
              onClick={handleCancelAnalysis}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
