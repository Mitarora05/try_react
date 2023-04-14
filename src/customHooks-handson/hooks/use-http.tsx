import { useState } from 'react';

interface RequestConfig {
  url: string;
  method: string;
  headers: { [key: string]: string };
  body?: object;
}

type ApplyData = (data: any) => void;

interface HttpResult {
  isLoading: boolean;
  error: any;
  sendRequest: () => Promise<void>;
}

const useHttp = (requestConfig: RequestConfig, applyData: ApplyData): HttpResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;