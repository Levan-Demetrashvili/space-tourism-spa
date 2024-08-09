import { useEffect } from "react";

export default function useBackground(src) {
  useEffect(() => {
    document.body.style.background = `url(${src}) center center/cover no-repeat`;
    return () => (document.body.style.background = "");
  }, [src]);
}
