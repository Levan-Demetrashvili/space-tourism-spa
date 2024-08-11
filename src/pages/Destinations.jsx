import useBackground from "../hooks/useBackground";
import DestinationContent from "../components/DestinationContent/DestinationContent";

const BG_SRC = "./assets/destination/background-destination-desktop.jpg";

export default function Destinations() {
  useBackground(BG_SRC);
  return (
    <main>
      <DestinationContent />
    </main>
  );
}
