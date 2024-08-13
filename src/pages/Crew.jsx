import CrewContent from '../components/CrewContent/CrewContent';
import useBackground from '../hooks/useBackground';

const BG_SRC = './assets/crew/background-crew-desktop.jpg';

export default function Crew() {
  useBackground(BG_SRC);
  return (
    <main>
      <CrewContent />
    </main>
  );
}
