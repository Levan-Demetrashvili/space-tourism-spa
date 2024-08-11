import PageTitle from "../components/PageTitle/PageTitle";
import useBackground from "../hooks/useBackground";

const BG_SRC = "./assets/technology/background-technology-desktop.jpg";

export default function Technology() {
  useBackground(BG_SRC);
  return (
    <>
      <PageTitle num={3} text={"SPACE LAUNCH 101"} />
    </>
  );
}
