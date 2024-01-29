'use client';

import { Analysis } from '@/app/ui/analysis/analysis';
import { useEffect, useState } from 'react';

export default function Page() {
  const [questionData, setQuestionData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  // Mock api to call the questions. I was able to parse the questions from the quidelines using python and regex.
  // This was not perfect, but it saved a lot of time and afterwards I cleaned up the questions manually.
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

    // This is a hacky way to fetch the data. I would have liked to use a library like react-query to handle the data fetching.
    fetchQuestionData().catch(console.error);
    fetchResponseData().catch(console.error);
  }, []);

  if (!questionData || !responseData) return <div>Loading...</div>;
  return <Analysis responseData={responseData} questionData={questionData} />;
}
