import styles from "./DestinationContent.module.css";
import PageTitle from "../PageTitle/PageTitle";
import Destination from "./Destination/Destination";

export default function DestinationContent() {
  return (
    <div className={styles.destinationContent}>
      <PageTitle num={1} text={"PICK YOUR DESTINATION"} />
      <Destination />
    </div>
  );
}
