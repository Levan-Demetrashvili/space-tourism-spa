import styles from './TechnologyContent.module.css';
import PageTitle from '../PageTitle/PageTitle';
import TechItem from './TechItem/TechItem';

export default function TechnologyContent() {
  return (
    <div className={styles.technologyContent}>
      <PageTitle num={3} text={'SPACE LAUNCH 101'} />
      <TechItem />
    </div>
  );
}
