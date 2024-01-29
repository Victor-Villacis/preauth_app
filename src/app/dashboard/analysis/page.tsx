'use client';

import { Analysis } from '@/app/ui/analysis/analysis';
import { useEffect, useState } from 'react';

export default function Page() {
  const [questionData, setQuestionData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchQuestionData = async () => {
      const response = await fetch('/api/questions');
      const jsonData = await response.json();
      setQuestionData(jsonData);
    };

    const fetchResponseData = async () => {
      const response = await fetch('/api/response');
      const jsonData = await response.json();
      const data = jsonData.data;
      setResponseData(data);
    };

    fetchQuestionData().catch(console.error);
    fetchResponseData().catch(console.error);
  }, []);

  if (!questionData || !responseData) return <div>Loading...</div>;
  return <Analysis responseData={responseData} questionData={questionData} />;
}
