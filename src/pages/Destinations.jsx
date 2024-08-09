import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/destination/background-destination-desktop.jpg";

export default function Destinations() {
  useBackground(BG_SRC);
  return <div>Destinations</div>;
}
