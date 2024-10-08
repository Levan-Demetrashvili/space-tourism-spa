import { useEffect, useState } from 'react';

export function useFetchData(url: string, callback?: () => void) {
  const [data, setData] = useState<any[] | object>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    callback?.();

    const controller = new AbortController();
    async function fetchData() {
      try {
        setError('');
        setIsLoading(true);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error('Something went wrong with fetching data');
        const data = await res.json();

        setData(data);
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [callback, url]);

  return { isLoading, data, error };
}
