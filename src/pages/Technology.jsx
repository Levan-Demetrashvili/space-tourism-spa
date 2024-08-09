import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/technology/background-technology-desktop.jpg";

export default function Technology() {
  useBackground(BG_SRC);
  return <div>technology</div>;
}
