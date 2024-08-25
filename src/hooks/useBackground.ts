import { useEffect } from 'react';

export function useBackground(src: string) {
  useEffect(() => {
    document.body.style.background = `url(${src}) center center/cover no-repeat`;
  }, [src]);
}
