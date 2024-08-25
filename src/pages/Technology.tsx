import { useMedia } from '../contexts/MediaContext';
import { useBackground } from '../hooks/useBackground';
import { useAppTitle } from '../hooks/useAppTitle';
import TechnologyContent from '../components/TechnologyContent/TechnologyContent';

export default function Technology() {
  const { device } = useMedia();
  useBackground(`./assets/technology/background-technology-${device}.jpg`);
  useAppTitle('Technology');
  return (
    <main>
      <TechnologyContent />
    </main>
  );
}
