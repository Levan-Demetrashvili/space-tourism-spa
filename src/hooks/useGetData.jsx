import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useFetchData } from './useFetchData';
import { useEffect } from 'react';

export function useGetData(url, initialQuery = '') {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { data } = useFetchData(url);
  const name = searchParams.get('name');

  useEffect(() => {
    if (!name) navigate(`?name=${initialQuery}`);
  }, [navigate, name, initialQuery]);

  return name && data && data.find(d => d.name.toLowerCase() === name.toLowerCase());
}
