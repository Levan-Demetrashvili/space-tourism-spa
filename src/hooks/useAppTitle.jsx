import { useEffect } from 'react';

export function useAppTitle(title) {
  useEffect(() => {
    document.title = `Space Tourism | ${title}`;
  }, [title]);
}
