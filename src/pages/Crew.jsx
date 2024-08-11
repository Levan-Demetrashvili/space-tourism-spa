import PageTitle from "../components/PageTitle/PageTitle";
import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  useBackground(BG_SRC);
  return (
    <>
      <PageTitle num={2} text={"MEET YOUR CREW"} />
    </>
  );
}
