import { useEffect } from 'react';

export function useBackground(src) {
  useEffect(() => {
    document.body.style.background = `url(${src}) center center/cover no-repeat`;
  }, [src]);
}
