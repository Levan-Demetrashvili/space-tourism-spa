import { useMediaQuery } from '@mui/material';
import { createContext, useContext } from 'react';

interface MediaProviderValues {
  isMobile: boolean;
  isTablet: boolean;
  device: string;
}

const MediaContext = createContext<MediaProviderValues | null>(null);

function MediaProvider({ children }: { children: React.ReactNode }) {
  const isTablet = useMediaQuery('(max-width:800px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';

  return <MediaContext.Provider value={{ isMobile, isTablet: isMobile ? false : isTablet, device }}>{children}</MediaContext.Provider>;
}

function useMedia() {
  const context = useContext(MediaContext);
  if (!context) throw new Error('MediaContext was used outside of MediaProvider');
  return context;
}

export { MediaProvider, useMedia };
