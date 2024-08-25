import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useFetchData } from './useFetchData';

export function useGetData(url: string, initialQuery: string = '') {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data } = useFetchData(url);
  const name = searchParams.get('name');

  useEffect(() => {
    if (!name) navigate(`?name=${initialQuery}`);
  }, [navigate, name, initialQuery]);

  return name && Array.isArray(data) && data.find(d => d.name.toLowerCase() === name.toLowerCase());
}
