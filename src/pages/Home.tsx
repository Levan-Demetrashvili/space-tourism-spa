import { useMedia } from '../contexts/MediaContext';
import { useBackground } from '../hooks/useBackground';
import { useAppTitle } from '../hooks/useAppTitle';
import HomeContent from '../components/HomeContent/HomeContent';

export default function Home() {
  const { device } = useMedia();
  useBackground(`./assets/home/background-home-${device}.jpg`);
  useAppTitle('Home');
  return (
    <main>
      <HomeContent />
    </main>
  );
}
