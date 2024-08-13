import useBackground from '../hooks/useBackground';
import TechnologyContent from '../components/TechnologyContent/TechnologyContent';

const BG_SRC = './assets/technology/background-technology-desktop.jpg';

export default function Technology() {
  useBackground(BG_SRC);
  return (
    <main>
      <TechnologyContent />
    </main>
  );
}
