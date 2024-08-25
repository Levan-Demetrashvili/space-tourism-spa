import styles from './CrewContent.module.css';
import PageTitle from '../PageTitle/PageTitle';
import CrewMember from './CrewMember/CrewMember';

export default function CrewContent() {
  return (
    <div className={styles.crewContent}>
      <PageTitle num={2} text={'MEET YOUR CREW'} />
      <CrewMember />
    </div>
  );
}
