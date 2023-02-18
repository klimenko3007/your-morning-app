import { useState, useEffect } from 'react';

type APIResponse = {
  response?: any;
};

const useGetFetch = (url: string) => {
  const [data, setData] = useState<null | APIResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useGetFetch;
