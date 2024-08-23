import { useMediaQuery } from '@mui/material';
import { createContext, useContext } from 'react';

const MediaContext = createContext();

function MediaProvider({ children }) {
  const isTablet = useMediaQuery('(max-width:800px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return <MediaContext.Provider value={{ isMobile, isTablet: isMobile ? false : isTablet, device }}>{children}</MediaContext.Provider>;
}

function useMedia() {
  const context = useContext(MediaContext);
  if (context === undefined) throw new Error('MediaContext was used outside of MediaProvider');
  return context;
}

export { MediaProvider, useMedia };
