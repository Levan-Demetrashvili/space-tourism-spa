import HomeContent from '../components/HomeContent/HomeContent';
import useBackground from '../hooks/useBackground';

const BG_SRC = './assets/home/background-home-desktop.webp';

export default function Home() {
  useBackground(BG_SRC);
  return (
    <main>
      <HomeContent />
    </main>
  );
}
