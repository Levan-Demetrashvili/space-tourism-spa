import { useEffect } from 'react';
import { useLocation } from 'react-router';

function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join();
}

export function useAppTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = pathname.split('/')[1];
    if (!title) title = 'Home';
    document.title = `Space Tourism | ${toTitleCase(title)}`;
  }, [pathname]);
}
