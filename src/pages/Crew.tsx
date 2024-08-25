import { useMedia } from '../contexts/MediaContext';
import { useBackground } from '../hooks/useBackground';
import { useAppTitle } from '../hooks/useAppTitle';
import CrewContent from '../components/CrewContent/CrewContent';

export default function Crew() {
  const { device } = useMedia();
  useBackground(`./assets/crew/background-crew-${device}.jpg`);
  useAppTitle('Crew');
  return (
    <main>
      <CrewContent />
    </main>
  );
}
