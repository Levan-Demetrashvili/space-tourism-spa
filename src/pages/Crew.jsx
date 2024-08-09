import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  useBackground(BG_SRC);
  return <div>Crew</div>;
}
