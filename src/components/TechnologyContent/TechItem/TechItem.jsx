import { useGetData } from '../../../hooks/useGetData';
import styles from './TechItem.module.css';
import Loader from '../../Loader/Loader';
import TechnologyNav from '../TechnologyNav/TechnologyNav';

export default function TechItem() {
  const techItem = useGetData('http://localhost:8000/technology', 'launch vehicle');
  if (!techItem) return <Loader />;

  return (
    <div className={styles.techItem}>
      <div className={styles.wrapper}>
        <TechnologyNav />
        <div className={styles.techItemInfo}>
          <p className={styles.term}>The terminology...</p>
          <h1>{techItem.name}</h1>
          <p className={styles.description}> {techItem.description}</p>
        </div>
      </div>
      <picture>
        <img src={techItem.images.portrait} alt={techItem.name} />
      </picture>
    </div>
  );
}
