import { useEffect } from 'react';

export function useAppTitle(title: string): void {
  useEffect(() => {
    document.title = `Space Tourism | ${title}`;
  }, [title]);
}
