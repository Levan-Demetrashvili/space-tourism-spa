import { useMedia } from '../contexts/MediaContext';
import { useBackground } from '../hooks/useBackground';
import { useAppTitle } from '../hooks/useAppTitle';
import DestinationContent from '../components/DestinationContent/DestinationContent';

export default function Destinations() {
  const { device } = useMedia();
  useBackground(`./assets/destination/background-destination-${device}.jpg`);
  useAppTitle('Destinations');
  return (
    <main>
      <DestinationContent />
    </main>
  );
}
