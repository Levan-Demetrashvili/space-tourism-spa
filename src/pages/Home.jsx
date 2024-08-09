import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/home/background-home-desktop.jpg";

export default function Home() {
  useBackground(BG_SRC);
  return <div>Home</div>;
}
